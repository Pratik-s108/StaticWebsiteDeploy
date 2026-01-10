Just A Basic Tic-tac-toe Game Project For Learning.
All working file is in newjs_script branch.
Project creatation Language's Used HTML/CSS/JS.


Docker for containerization:
Image creation:
        - docker build -t game-img:latest /path/to/dockerfile
Container Running (for manual testing):
        - docker run -d -p 80:80 --name game-container game-img:latest


Create EKS-cluster on AWS.
Install kubectl in ububtu server:
   cmd v1.34 kubectl      - curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.34.2/2025-11-13/bin/linux/amd64/kubectl
                          - chmod +x ./kubectl
                          - mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH
                          - echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
Kubernetes :
Objects - deployment, Service, Hpa

run pods: 
        - kubectl apply -f /path/to/yaml files
