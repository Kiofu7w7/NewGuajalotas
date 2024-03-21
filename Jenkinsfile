pipeline {
  agent any
  tools {
    dockerTool 'Docker'
  }
  stages {
    stage('Deploy') {
      steps {
        sh 'docker run hello-world'
      }
    }
  }
}
