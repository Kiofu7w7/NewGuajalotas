pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        script {
          checkout scm
        }
      }
    }
    stage('SonarQube Analysis') {
      steps {
        script {
          def scannerHome = tool 'sonarqubeScanner';
          withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
    stage('Quality Gate') {
      steps {
        script {
          sleep 10 // Wait for 10 seconds
        }
        timeout(time: 1, unit: 'HOURS') {
          waitForQualityGate abortPipeline: true, timeout: 10, secondaryTimeout: 10, message: 'Waiting for SonarQube Quality Gate'sh '''echo "Quality gate passed successfully"'''
        }
      }
  }
    }
    stage('Deploy') {
      steps {
        sh '''echo "Deployment is successful"'''
      }
    }
  }
}
