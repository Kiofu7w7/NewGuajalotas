pipeline {
  agent any
  tools{
    jdk 'OpenJDK'
    maven 'mavenTool'
  }
  stages {
    stage('Docker build') {
      steps {
        sh '''docker run hello-world'''
      }
    }
  }
}
