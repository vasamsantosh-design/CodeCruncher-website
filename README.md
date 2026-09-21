# CodeCruncher – DevOps Deployment Project

## 1. Project Overview

CodeCruncher is a React and TypeScript based web application designed to provide short, project-based coding lessons for beginners and working professionals.

This project demonstrates how the CodeCruncher application can be containerized with Docker and deployed using Amazon ECR, Amazon EKS, and AWS Fargate.

## 2. Project Objectives

- Containerize the CodeCruncher application using Docker.
- Build and test the application using a Docker image.
- Store the Docker image in Amazon ECR.
- Create an Amazon EKS cluster.
- Configure AWS Fargate for serverless Kubernetes workloads.
- Deploy CodeCruncher on EKS using Kubernetes manifests.
- Verify application availability and Kubernetes resources.
- Manage the project source code using Git and GitHub.

## 3. Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Docker
- Kubernetes
- Amazon ECR
- Amazon EKS
- AWS Fargate
- Git and GitHub

## 4. Project Structure

```text
CodeCruncher-website/
├── src/
├── public/
├── eks/
│   ├── deployment.yaml
│   └── service.yaml
├── Dockerfile
├── compose.yaml
├── package.json
├── package-lock.json
├── vite.config.ts
└── README.md
```

The eks directory contains the Kubernetes deployment and service configuration used for the AWS EKS deployment.
## 5. Docker Containerization

The application is containerized using a multi-stage Docker build.

The Dockerfile uses Node.js to build the React application and Nginx to serve the generated production files.

Docker image used during the project:

```text
codecruncher:v1
```

The container exposes port 80. The application was tested locally using Docker and verified with an HTTP 200 response.
## 6. Amazon ECR Implementation

The Docker image was pushed to Amazon Elastic Container Registry (ECR) for use by Amazon EKS.

ECR repository:

```text
codecruncher
```

Image tag:

```text
v1
```

The ECR image was successfully verified using AWS CLI commands such as list-images and describe-images.
## 7. Amazon EKS Cluster Setup

An Amazon EKS cluster was created in the AWS Mumbai region (ap-south-1).

Cluster name: codecruncher-eks

The cluster was configured with AWS Fargate so Kubernetes workloads could run without managing EC2 worker nodes.

## 8. AWS Fargate Configuration

A dedicated Fargate profile named codecruncher-fargate was created for the codecruncher namespace.

The CodeCruncher pods were scheduled and executed on AWS Fargate nodes.

## 9. Application Deployment on EKS

The application was deployed using Kubernetes Deployment and Service manifests.

Deployment replicas: 2

The application image was pulled from Amazon ECR.

The Kubernetes Service was configured as ClusterIP because an external AWS Load Balancer was not required for this project.

## 10. Application Verification

The deployment was verified using kubectl commands.

Both CodeCruncher pods reached Running status with zero restarts.

The Kubernetes Service exposed port 80 internally.

Service endpoints successfully pointed to both application pods.

An internal curl test returned HTTP 200 and confirmed that the CodeCruncher application was accessible.

## 11. Troubleshooting

- Local Kubernetes initially could not access the Docker image. This was resolved using minikube image load and imagePullPolicy: Never.
- The EKS service was changed from LoadBalancer to ClusterIP because external load balancing was not required.
- Kubernetes deployment and service resources were checked using kubectl get pods, kubectl get svc, and kubectl get endpoints.

## 12. Git and GitHub

The Kubernetes configuration files were committed to the CodeCruncher GitHub repository.

Git changes were synchronized with the remote repository using git pull --rebase and git push.

The final working tree was verified as clean and synchronized with origin/main.

## 13. Security Considerations

- AWS credentials and secret keys were not stored in the repository.
- Sensitive environment variables should be supplied securely and should not be committed to Git.
- IAM permissions should follow the principle of least privilege.
- Container images should be scanned and kept updated.
- Kubernetes access should be restricted to authorized users.

## 14. Final Deployment Flow

```text
Developer
   |
   v
Dockerfile
   |
   v
Docker Image
   |
   v
Amazon ECR
   |
   v
Amazon EKS
   |
   v
AWS Fargate
   |
   v
CodeCruncher Application
```

## 15. Conclusion

The CodeCruncher application was successfully containerized with Docker, stored in Amazon ECR, and deployed on Amazon EKS using AWS Fargate. Kubernetes resources were verified and the application was successfully accessed internally. The project demonstrates a practical containerized application deployment workflow using AWS and Kubernetes.
