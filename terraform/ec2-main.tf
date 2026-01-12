provider "aws" {
    region = "ap-south-1"
}

resource "aws_instance" "instance-block"{
    ami = "ami-02b8269d5e85954ef"
    instance_type = "m7i-flex.large"
    key_name = "jenkins-key"
    tags = {
        Name = "Static-website/jenkins-master"
        name = "created-with-terraform"
    }
}

resource "aws_instance" "instance-block-2" {
    ami = "ami-02b8269d5e85954ef"
    instance_type = "m7i-flex.large"
    key_name = "jenkins-key"
    tags = {
        Name = "Jenkins-slave"
        name = "created-with-terraform"
    }
}
