FROM ubuntu:16.04

MAINTAINER Daniel Cano Salgado

RUN apt-get update
RUN apt-get -y install apache2

COPY ./Pagina/ /var/www/html/

EXPOSE 80

ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]