# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "home-site"
        DOCKER_CONTAINER = "home-site"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/YOURUSERNAME/home-site.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        stage('Deploy Container') {
            steps {
                script {
                    // Stop old container if exists
                    sh """
                    docker rm -f ${DOCKER_CONTAINER} || true
                    docker run -d --name ${DOCKER_CONTAINER} -p 3000:80 ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }
    triggers {
        githubPush()
    }
}
