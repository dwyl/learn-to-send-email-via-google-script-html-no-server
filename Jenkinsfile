pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
             step([$class: 'CxScanBuilder']){

             
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}