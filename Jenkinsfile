pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = 'dockerhub-credentials'
    DOCKERHUB_ORG = 'your-dockerhub-username'
    BACKEND_IMAGE = "${DOCKERHUB_ORG}/online-learning-backend:latest"
    FRONTEND_IMAGE = "${DOCKERHUB_ORG}/online-learning-frontend:latest"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'cd backend && npm install'
        sh 'cd frontend && npm install'
      }
    }

    stage('Build Backend') {
      steps {
        sh 'cd backend && docker build -t $BACKEND_IMAGE .'
      }
    }

    stage('Build Frontend') {
      steps {
        sh 'cd frontend && docker build -t $FRONTEND_IMAGE .'
      }
    }

    stage('Run Containers') {
      steps {
        sh 'docker compose down || true'
        sh 'docker compose up -d --build'
      }
    }

    stage('Check Running Containers') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    success {
      echo "PIPELINE SUCCESS ✅ APP RUNNING"
    }
    failure {
      echo "PIPELINE FAILED ❌"
    }
  }
}