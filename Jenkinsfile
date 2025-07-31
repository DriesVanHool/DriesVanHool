pipeline {
    agent any

    environment {
        IMAGE_NAME = "home"
        CONTAINER_NAME = "home"
        DOCKER_PORT = "3000"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/DriesVanHool/DriesVanHool.git'
            }
        }

        stage('Load Environment File') {
            steps {
                withCredentials([file(credentialsId: 'dries-env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }

        stage('Build & Tag Image') {
            steps {
                script {
                    sh """
                    docker build --pull --no-cache \
                        --build-arg NODE_ENV=production \
                        -t ${IMAGE_NAME}:latest .
                    """
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    sh """
                    docker run -d --name ${CONTAINER_NAME} \
                        --env-file .env \
                        -p ${DOCKER_PORT}:80 \
                        ${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful! Your React app is live."
        }
        failure {
            echo "Build or deployment failed. Check logs."
        }
        cleanup {
            sh 'docker image prune -f || true'
        }
    }
}
