# AWS-Deep-Thoughts

## Description
Deploy a **MERN Stack** Application that allows users to post their thoughts using the cloud, and replace the back-end API with cloud resources to handle the storage, database, and computing. Configure IAM user permissions to connect various [AWS services](https://aws.amazon.com/). Store and retrieve static assets using Amazon Simple Storage Service (S3). Connect an existing application to a DynamoDB database. Configure a Linux server to deploy the application to an Elastic Compute Cloud (EC2) instance. Learn differences between Saas (Software as a Service), Paas (Platform as a Service), Iaas (infastructure as a Service).

## AWS Resources
[IAM](https://aws.amazon.com/iam/), or Identity and Access Management

[S3](https://aws.amazon.com/s3/), or Simple Storage Service

[DynamoDB](https://aws.amazon.com/dynamodb/) is a NoSQL key-value and document database.

[EC2](https://aws.amazon.com/ec2/), or Elastic Compute Cloud, is a secure, scalable web service designed to simplify cloud computing.

The [AWS Command Line Interface](https://aws.amazon.com/cli/), or AWS CLI, will help you bring together your various AWS services, by controlling them from the command line. You can also automate these services by using scripts.

## NPM Packages
✅ [aws-sdk](https://www.npmjs.com/package/aws-sdk) is the official AWS software development kit (SDK) for JavaScript. Available for browsers, mobile devices, or Node.js back ends, this package will allow your Node.js application to interface with AWS.

[multer](https://www.npmjs.com/package/multer) is a Node.js middleware for handling file uploads. In this project, you’ll use it as a container for image files until they’re ready to be uploaded to an S3 bucket.

✅[uuid](https://www.npmjs.com/package/uuid) stands for universally unique identifier. This package generates random alphanumeric strings that can serve as unique identifiers. You’ll use this package to generate identifiers for your S3 bucket and for your application’s images.

[pm2](https://www.npmjs.com/package/pm2) is a Node.js production process manager that helps you manage your web application—and keep it live online. You’ll use this package to keep your application running even after you’ve logged out of the server on EC2.

## Web Server
[nginx](https://www.nginx.com/), sometimes stylized as NGINX or NginX, is a free and open-source web server that can also serve as a reverse proxy, load balancer, mail proxy, or HTTP cache. You’ll use it as an application server to expose the EC2 instance to the internet.

## Explore
The Compute category offers services that allow computer systems to be provisioned to run applications, calculate complex calculations, and respond to requests.

The Storage category offers services that store data in the cloud.

The Database category includes relational and non-relational databases that can be used to store and query large amounts of data.

## Screenshots