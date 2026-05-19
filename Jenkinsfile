pipeline {
    agent any

    environment {
        PROJECT_NAME = "online-learning-platform"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build --no-cache'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Check Running Containers') {
            steps {
                bat 'docker ps'
            }
        }

        stage('Success Message') {
            steps {
                echo "======================================"
                echo "✅ BUILD SUCCESS"
                echo "Frontend: http://localhost:3000"
                echo "Backend: http://localhost:5000"
                echo "MongoDB running on 27017"
                echo "======================================"
            }
        }
    }

    post {
        success {
            echo "PIPELINE FINISHED SUCCESSFULLY 🎉"
        }
        failure {
            echo "PIPELINE FAILED ❌"
        }
    }
}