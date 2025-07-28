pipeline {
  agent {
    docker {
      image 'node:18-alpine'
    }
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/DriesVanHool/DriesVanHool.git'
      }
    }


    stage('Inject .env') {
        steps {
            withCredentials([file(credentialsId: 'dries-env', variable: 'ENV_FILE')]) {
                sh 'cp $ENV_FILE .env'
            }
        }
    }

    stage('Build React App') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Docker Build & Restart') {
      steps {
        sh 'docker build -t react-app ./'
        sh 'docker stop react-app || true'
        sh 'docker rm react-app || true'
        sh 'docker run -d --name react-app -p 3000:3000 react-app'
      }
    }
  }
}

