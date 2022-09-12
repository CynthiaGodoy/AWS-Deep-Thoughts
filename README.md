# AWS-Deep-Thoughts
IAM, S3, DynamoDB, Linux Server, EC2, MERN, SDK, multer, uuid, pm2, nginx

Configure IAM user permissions to connect various AWS services.
Store and retrieve static assets using Amazon Simple Storage Service (S3).
Connect an existing application to a DynamoDB database.
Configure a Linux server to deploy the application to an Elastic Compute Cloud (EC2) instance.
AWS, also known as Amazon Web Services, is currently the most comprehensive and widely used cloud computing platform, providing on-demand services to a vast array of customers—including individuals, companies, and governments and ranging from startup to enterprise. Offered on a pay-as-you-go basis, AWS includes an extensive free service tier, which you’ll use for this course. Signing up will require a credit card, but you won’t be charged any fees to create the project for this course.

You’ll use the following AWS resources in this course:

IAM, or Identity and Access Management, helps ensure secure access to AWS services and resources. The IAM user console enables you to create and manage AWS users and groups as well as allow and deny access to AWS resources.

S3, or Simple Storage Service, is an object storage service used by companies of all sizes and in all industries. S3 allows customers to store and protect any amount of data for various uses, ranging from web and mobile applications to data archives and hybrid cloud storage. For this course, you’ll use it to store and retrieve static assets for your application.

DynamoDB is a NoSQL key-value and document database that delivers incredibly fast performance—no matter the size of your data. This fully managed and multi-region database provides built-in security, backup, and in-memory caching for web applications. You’ll use DynamoDB as the database for your application in this course.

EC2, or Elastic Compute Cloud, is a secure, scalable web service designed to simplify cloud computing. As the name suggests, EC2 offers flexibility when you need to obtain and configure capacity for your web applications. You’ll use EC2 to configure a Linux server to host your application.

The AWS Command Line Interface, or AWS CLI, will help you bring together your various AWS services, by controlling them from the command line. You can also automate these services by using scripts.

You’ll use the following npm packages in this course:

aws-sdk is the official AWS software development kit (SDK) for JavaScript. Available for browsers, mobile devices, or Node.js back ends, this package will allow your Node.js application to interface with AWS.

multer is a Node.js middleware for handling file uploads. In this project, you’ll use it as a container for image files until they’re ready to be uploaded to an S3 bucket.

uuid stands for universally unique identifier. This package generates random alphanumeric strings that can serve as unique identifiers. You’ll use this package to generate identifiers for your S3 bucket and for your application’s images.

pm2 is a Node.js production process manager that helps you manage your web application—and keep it live online. You’ll use this package to keep your application running even after you’ve logged out of the server on EC2.

nginx, sometimes stylized as NGINX or NginX, is a free and open-source web server that can also serve as a reverse proxy, load balancer, mail proxy, or HTTP cache. You’ll use it as an application server to expose the EC2 instance to the internet.
