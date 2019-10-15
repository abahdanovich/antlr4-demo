FROM node
ARG UNAME=node
ARG UID=1000
ARG GID=1000
USER root
RUN apt update && apt install -y default-jre-headless
RUN userdel -r node && echo "creating user with UID=$UID, GID=$GID" && groupadd -g $GID -o $UNAME && useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME
USER $UNAME