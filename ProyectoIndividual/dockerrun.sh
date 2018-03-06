#!/bin/bash
sudo docker build -t pagweb $(pwd)
sudo docker run -d -p 8000:80 pagweb