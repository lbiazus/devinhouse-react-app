FROM node:12-alpine as build

ENV HOME=/home/devinhouse
ENV PUBLIC_URL=/
WORKDIR $HOME

COPY package.json ./
RUN npm install --only=prod --silent

COPY . /home/devinhouse
RUN npm run build

# production environment

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /home/devinhouse/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]