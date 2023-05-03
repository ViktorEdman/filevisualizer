FROM node:alpine as builder

WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine
COPY ./nginx-docker/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the build stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]