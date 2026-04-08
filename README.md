# 🎮 Tic-Tac-Toe DevOps Project

This repository contains a Tic-Tac-Toe game project along with complete DevOps implementation using Docker, Kubernetes, Terraform, and Jenkins.

---

## 📌 Important Note

⚠️ The fully working frontend game is available in the `newjs_script` branch  
The `main` branch focuses on DevOps setup and infrastructure

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Containerization: Docker  
- Orchestration: Kubernetes (EKS)  
- Infrastructure as Code: Terraform  
- CI/CD: Jenkins  
- Cloud: AWS  

---

## 📂 Project Structure (New_script.js Branch)
```bash
.
├── k8s/  
│   ├── deployment.yaml  
│   ├── service.yaml  
│   └── hpa.yaml 
|
├── my-app/ 
|  ├── index.html  
|  ├── script.js  
|  ├── style.css  
|  ├── home.html
|
├── terraform/  
│   ├── ec2-main.tf  
│   └── eks-cluster-main.tf  
|
├── used/  
|    └──<Images,Sound>
|
├── package-installation.sh
├── Jenkins_CICD 
├── dockerfile
└── docker-compose.yml   
```
---

## 🚀 Project Overview

This project demonstrates a complete DevOps lifecycle:

1. Build a frontend application  
2. Containerize using Docker  
3. Deploy using Kubernetes (EKS)  
4. Manage infrastructure using Terraform  
5. Automate using Jenkins  

--- 

## 📦 Installation Script

All Requried Tools, Packages will be installed Through ShellScripting ( Manually, For automation Jenkins CI/CD has all Setup)

### Commands
```bash
chmod +x package-installation.sh  
```
```bash
./package-installation.sh  
```
---

## 🐳 Docker Setup

### Build Image:
```bash
docker build -t game-img:latest .
```
### Run Container:
```bash
docker run -d -p 80:80 --name game-container game-img:latest
```
### Access the app:

* http://<Public_IP>:<Port>

---

## ⚙️ Docker Compose (Optional)
```bash
docker-compose up -d
```
### Access the app:

* http://<Public_IP>:<Port>

---

## ☁️ Terraform Setup

Create Infrastructure For Deployment Of AWS EKS(Kubernetes) and EC2 instance(Jenkins)
```bash
cd terraform  
terraform init  
```
```bash
terraform plan   
```
```bash 
terraform apply  
```
---

## ☸️ Kubernetes Deployment

Use K8s For Deployment For Cost-Optimization

### Command For Run Pods
```bash
kubectl apply -f .
```
---

## 🔄 CI/CD with Jenkins

### Installation

Create EKS-cluster on AWS.
```bash
aws eks --region <region> update-kubeconfig --name <cluster-name>
```

Install kubectl in ububtu server:

```bash
curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.34.2/2025-11-13/bin/linux/amd64/kubectl
chmod +x ./kubectl
mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
```
                          
### Jenkins For Automate all the process, pipeline file is included to automate:

- Clone Project Stage
- Installing Packages Stage
- Build Stage Docker image creation
- Push To DockerHub Stage
- Aws CLI Configure Stage
- Infrastructure Creation Stage
- Deployment Stage

Can Integrate Webhooks for automatically trigger the pipeline,
And Also Integrate SonarQube For QualityGate.

---

## ❗ Common Errors & Fixes

Docker Port Issue Or Container Issue:
- docker logs <container>
- docker stop game-container  
- docker rm game-container  

Check Pods:
- kubectl get pods  
- kubectl logs <pod-name>  

Terraform:
- terraform init
- terraform validate  

---

## 📈 Future Improvements

- Add backend (Node.js)  
- Use AWS ECR  
- Add GitHub Actions  
- Setup Ingress  

---

## 👨‍💻 Author

Pratik Lanjewar  
DevOps Enthusiast 🚀
