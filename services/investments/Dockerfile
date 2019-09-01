FROM python:3.7.2-alpine

# install dependencies
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev && \
    apk add netcat-openbsd
# RUN apt-get install -y build-essential libssl-dev libffi-dev python-dev
# RUN apt-get install -y libreoffice
# set working directory
WORKDIR /usr/src/app

RUN pip install --upgrade pip
# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt


COPY . /usr/src/app

# run server
CMD ["/usr/src/app/entrypoint.sh"]