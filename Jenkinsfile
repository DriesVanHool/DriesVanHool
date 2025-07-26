pipeline {
    agent any

    environment {
        IMAGE_NAME = "dries-app"
        CONTAINER_NAME = "dries-app"
        HOST_PORT = "5173"
        CONTAINER_PORT = "80"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/DriesVanHool/DriesVanHool.git'
            }
        }

        stage('Inject .env') {
            steps {
                withCredentials([file(credentialsId: 'dries-env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }

        stage('Build Image') {
            steps {
                sh 'podman build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                podman rm -f $CONTAINER_NAME || true
                podman run -d --name $CONTAINER_NAME -p $HOST_PORT:$CONTAINER_PORT $IMAGE_NAME
                '''
            }
        }
    }
}
