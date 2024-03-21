pipeline {
  agent any
  tools{
    maven 'mavenTool'
  }
  stages {
    stage('Deploy') {
      steps {
        sh '''docker run hello-world'''
      }
    }
  }
}
