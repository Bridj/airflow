FROM ubuntu:20.04
LABEL maintainer="abilling@bridj.com"

# Install Python 3.8
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




