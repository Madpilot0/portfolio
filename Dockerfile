FROM nginx
EXPOSE 80
COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/p.conf
RUN echo 'server_tokens off;' > /etc/nginx/conf.d/server_tokens.conf