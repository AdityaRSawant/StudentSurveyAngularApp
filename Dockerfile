### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/swe645-assignment3 /usr/share/nginx/html