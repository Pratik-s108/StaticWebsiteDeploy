from nginx:latest

copy my-app/* /usr/share/nginx/html

expose 80

CMD ["nginx", "-g", "daemon off;"]
