pipeline {
  agent any

  environment {
    DOCKERHUB_REPO = 'yourdockerhubusername/online-learning-platform'
    BACKEND_IMAGE = "${DOCKERHUB_REPO}-backend"
    FRONTEND_IMAGE = "${DOCKERHUB_REPO}-frontend"
    DOCKERHUB_CREDENTIALS = 'dockerhub-creds'
    SONARQUBE_SERVER = 'sonarqube'
  }

  options {
    ansiColor('xterm')
    timestamps()
  }

  stages {
    stage('Git Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
        dir('frontend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        sh 'echo "No tests found. Skipping test stage."'
      }
    }

    stage('SonarQube Analysis') {
      when {
        expression { return env.SONARQUBE_SERVER != null }
      }
      steps {
        script {
          if (env.SONAR_HOST_URL) {
            withSonarQubeEnv(env.SONARQUBE_SERVER) {
              sh 'echo "Running SonarQube analysis..."'
              sh 'echo "No SonarQube project key configured. Add analysis steps here."'
            }
          } else {
            sh 'echo "SONAR_HOST_URL not set. Skipping SonarQube."'
          }
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -f Dockerfile -t ${BACKEND_IMAGE}:latest .'
        sh 'docker build -f frontend/Dockerfile -t ${FRONTEND_IMAGE}:latest frontend'
      }
    }

    stage('Push Docker Images') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
            sh 'docker push ${BACKEND_IMAGE}:latest'
            sh 'docker push ${FRONTEND_IMAGE}:latest'
          }
        }
      }
    }

    stage('Deploy with Docker Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }
  }

  post {
    success {
      echo 'Build Successful'
    }
    failure {
      echo 'Build Failed'
    }
  }
}
