#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# ====== CONFIG ======
DOCKER_USERNAME="armanalam"
IMAGE_NAME="basic-nextjs-app"
IMAGE_TAG="v1.1.0"

# ====================

echo "Building Next.js production app..."
yarn install
yarn build

echo "Next.js build completed."

echo "Building Docker image..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG .

echo "Docker image built: $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG"

echo "Logging in to Docker Hub..."
docker login

echo "Pushing Docker image to Docker Hub..."
docker push $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG

echo " Image is available at: docker.io/$DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG"
