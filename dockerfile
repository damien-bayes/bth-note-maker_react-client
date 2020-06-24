# Dockerfile
#
# Project: Baythium Note Maker
# File: /dockerfile
# Organization: Baythium Ecosystem: https://baythium.com

FROM nginx:1.16.1 AS builder

LABEL maintainer = "damien.bayes.db@gmail.com"

ENV NGINX_VERSION 1.16.1

########
# LAYERS
########
COPY build/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/custom-errors.conf /etc/nginx/custom-errors.conf
COPY nginx/nginx.default.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html && \ 
    chmod -R 755 /usr/share/nginx/html

EXPOSE 10091

CMD ["nginx", "-g", "daemon off;"]
