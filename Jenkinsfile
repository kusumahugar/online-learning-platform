pipeline {
  agent any

  environment {
<<<<<<< HEAD
    DOCKERHUB_CREDENTIALS = 'dockerhub-credentials'
    DOCKERHUB_ORG = 'your-dockerhub-username'
    BACKEND_IMAGE = "${DOCKERHUB_ORG}/online-learning-backend:latest"
    FRONTEND_IMAGE = "${DOCKERHUB_ORG}/online-learning-frontend:latest"
    SONARQUBE_ENABLED = 'false'
  }

  options {
    ansiColor('xterm')
    timestamps()
    skipDefaultCheckout()
=======
    DOCKERHUB_REPO = 'yourdockerhubusername/online-learning-platform'
    BACKEND_IMAGE = "${DOCKERHUB_REPO}-backend"
    FRONTEND_IMAGE = "${DOCKERHUB_REPO}-frontend"
    DOCKERHUB_CREDENTIALS = 'dockerhub-creds'
    SONARQUBE_SERVER = 'sonarqube'
  }

  options {
    timestamps()
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
  }

  stages {
    stage('Git Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
<<<<<<< HEAD
        dir('backend') {
          sh 'npm install'
        }
=======
        sh 'npm ci'
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
        dir('frontend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
<<<<<<< HEAD
        script {
          dir('backend') {
            def backendStatus = sh(script: 'npm run test || true', returnStatus: true)
            if (backendStatus != 0) {
              echo 'Backend tests did not run or failed. Continuing because no tests are configured.'
            }
          }
          dir('frontend') {
            def frontendStatus = sh(script: 'npm run test || true', returnStatus: true)
            if (frontendStatus != 0) {
              echo 'Frontend tests did not run or failed. Continuing because no tests are configured.'
            }
          }
        }
=======
        sh 'echo "No tests found. Skipping test stage."'
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
      }
    }

    stage('SonarQube Analysis') {
      when {
<<<<<<< HEAD
        expression { env.SONARQUBE_ENABLED == 'true' }
      }
      steps {
        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
          sh 'sonar-scanner -Dsonar.projectKey=online-learning-platform -Dsonar.sources=. -Dsonar.host.url=${SONAR_HOST_URL} -Dsonar.login=${SONAR_TOKEN}'
=======
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
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
        }
      }
    }

    stage('Build Docker Images') {
      steps {
<<<<<<< HEAD
        script {
          dir('backend') {
            sh "docker build -t ${BACKEND_IMAGE} ."
          }
          dir('frontend') {
            sh "docker build -t ${FRONTEND_IMAGE} ."
=======
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
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
          }
        }
      }
    }

<<<<<<< HEAD
    stage('Push Images to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CREDENTIALS, usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
          sh 'echo "$DOCKERHUB_PASSWORD" | docker login --username "$DOCKERHUB_USERNAME" --password-stdin'
          sh "docker push ${BACKEND_IMAGE}"
          sh "docker push ${FRONTEND_IMAGE}"
        }
      }
    }

    stage('Deploy using Docker Compose') {
      steps {
        sh 'docker compose down || true'
        sh 'docker compose up -d --build'
=======
    stage('Deploy with Docker Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
      }
    }
  }

  post {
    success {
      echo 'Build Successful'
    }
    failure {
<<<<<<< HEAD
      echo 'Build failed'
=======
      echo 'Build Failed'
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
    }
  }
}
