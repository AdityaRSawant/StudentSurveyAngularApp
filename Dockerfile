###Stage 1: Build
FROM node:12.7-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/swe645-assignment3 /usr/share/nginx/html
COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf

EXPOSE 8080
EXPOSE 80
EXPOSE 443