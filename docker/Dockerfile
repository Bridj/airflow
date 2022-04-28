FROM ubuntu:20.04
LABEL org.python.version="3.8" \
org.opencontainers.image.distro="focal" \
org.opencontainers.image.base.name="ubuntu/ubuntu:20.04" \
org.opencontainers.image.author="abilling@bridj.com" \
org.opencontainers.image.maintainer="devops@bridj.com"


RUN apt-get update \
    && apt-get install -y --no-install-recommends \
          python3-pip \
          build-essential \
          libssl-dev  \
          libffi-dev \
          python3-dev \
          python3-venv \
    && apt-get autoremove -yqq --purge \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

