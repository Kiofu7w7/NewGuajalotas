pipeline {
  agent any
  tools{
    jdk 'OpenJDK'
    maven 'mavenTool'
  }
  stages {
    stage('Maven build') {
      steps {
        sh 'mvn clean install'
      }
    }
    stage('Docker build') {
      steps {
        sh 'docker run hello-world'
      }
    }
  }
}
