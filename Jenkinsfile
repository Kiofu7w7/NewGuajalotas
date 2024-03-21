pipeline {
  agent any
  tools{
    maven 'maven_3_5_0'
  }
  stages {
    stage('Deploy') {
      steps {
        sh '''docker run hello-world'''
      }
    }
  }
}
