pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building application...'
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'

                sh '''
                    if npm run | grep -q "test"; then
                        npm test
                    else
                        echo "No test script found. Skipping tests."
                    fi
                '''
            }
        }

        stage('Package Application') {
            steps {
                echo 'Packaging application...'
                sh 'tar -czf CodeCruncher-build.tar.gz dist/'
            }
        }

        stage('Deliver Artifact') {
            steps {
                echo 'Archiving artifact...'

                archiveArtifacts artifacts: 'CodeCruncher-build.tar.gz',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Jenkins pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins pipeline failed.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
