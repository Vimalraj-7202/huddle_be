pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git branch: 'dev',
                    url: 'https://github.com/Vimalraj-7202/huddle_be.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

    }
}