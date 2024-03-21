pipeline {
  agent any
  tools{
    mavenTool 'maven_3_5_0'
  }
  stages {
    stage('Deploy') {
      steps {
        sh '''docker run hello-world'''
      }
    }
  }
}
