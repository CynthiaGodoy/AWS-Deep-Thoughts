# AWS-Deep-Thoughts

## Description
Deploy a **MERN Stack** Application that allows users to post their thoughts using the cloud, and replace the back-end API with cloud resources to handle the storage, database, and computing. Configure IAM user permissions to connect various [AWS services](https://aws.amazon.com/). Store and retrieve static assets using Amazon Simple Storage Service (S3). Connect an existing application to a DynamoDB database. Configure a Linux server to deploy the application to an Elastic Compute Cloud (EC2) instance. Learn differences between SaaS (Software as a Service), PaaS (Platform as a Service), IaaS (infastructure as a Service).

## AWS Resources
[IAM](https://aws.amazon.com/iam/), or Identity and Access Management

[S3](https://aws.amazon.com/s3/), or Simple Storage Service

[DynamoDB](https://aws.amazon.com/dynamodb/) is a NoSQL key-value and document database.

[EC2](https://aws.amazon.com/ec2/), or Elastic Compute Cloud, is a secure, scalable web service designed to simplify cloud computing.

The [AWS Command Line Interface](https://aws.amazon.com/cli/), or AWS CLI, will help you bring together your various AWS services, by controlling them from the command line. You can also automate these services by using scripts.

## NPM Packages
✅ [aws-sdk](https://www.npmjs.com/package/aws-sdk) is the official AWS software development kit (SDK) for JavaScript. Available for browsers, mobile devices, or Node.js back ends, this package will allow your Node.js application to interface with AWS.

✅ [multer](https://www.npmjs.com/package/multer) is a Node.js middleware for handling file uploads. In this project, you’ll use it as a container for image files until they’re ready to be uploaded to an S3 bucket.

✅ [uuid](https://www.npmjs.com/package/uuid) stands for universally unique identifier. This package generates random alphanumeric strings that can serve as unique identifiers. You’ll use this package to generate identifiers for your S3 bucket and for your application’s images.

✅ [pm2](https://www.npmjs.com/package/pm2) is a Node.js production process manager that helps you manage your web application—and keep it live online. You’ll use this package to keep your application running even after you’ve logged out of the server on EC2.

## Web Server
✅ [nginx](https://www.nginx.com/), sometimes stylized as NGINX or NginX, is a free and open-source web server that can also serve as a reverse proxy, load balancer, mail proxy, or HTTP cache. You’ll use it as an application server to expose the EC2 instance to the internet.

## Explore
The Compute category offers services that allow computer systems to be provisioned to run applications, calculate complex calculations, and respond to requests.

The Storage category offers services that store data in the cloud.

The Database category includes relational and non-relational databases that can be used to store and query large amounts of data.

## Process | Install
### feature/s3-setup
* Explained the economics of cloud computing.
* Set up an AWS account.
* Analyzed the core services that AWS makes available.
* Configured the AWS CLI with access keys.

1. Set up AWS Free Tier Account.
2. Create Root User Email, Password, Billing, Budget Alerts.
3. Set up Security for AWS IAM with Two-Step Authentication.
4. Create and IAM User with Access Key & Password. Save them.
5. Create Group within User and Check box for Administrator Access.
6. Sign-out of Root User and Sign back in as IAM user.
7. Install Node Dependencies
```
npm install
```
8. Download AWS CLI. Verify version installed from `cmd`.
```
aws --version
```
9. Set up AWS CLI
```
aws configure
```
10. Type in your own Access Key ID & Secret Access Keys created for the IAM User.
```
$ aws configure
AWS Access Key ID [None]: EXAMPLE
AWS Secret Access Key [None]: EXAMPLEKEY
Default region name [None]: us-east-2
Default output format [None]: json
```
11. Make sure uuid hase been installed.
```
npm install aws-sdk uuid
```
12. Run file at command line from the `Server Directory` to create S3 bucket in AWS. Login to S3 console in AWS to verify if bucket has been created. This confirms that aws-sdk could use the credentials.
```
node create-bucket.js
```
### feature/userthoughts-table
* Created a data model for the application.
* Created and populated a table by using DynamoDB.
* Read and wrote data to the database.
* Queried a table in a NoSQL database.
* Created API endpoints
* Programmatically connected to AWS.

1. Download AWS DynamoDB. Navigate to folder and run `cmd`. Should run on Port 8000. 
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
2. Run file from the `Root Directory`. You should see a created table.
```
node ./server/db/CreateThoughtsTable.js
```
3. Seed the table from the `Root Directory`. Verify table is created in the CLI.
```
node ./server/db/LoadThoughts.js
```
4. Create API Endpoints in `Server Directory`.
```
npm init --y
```
Make sure express is installed in `Server Directory` if not, 
```
npm install express
```
Make sure aws-sdk is install in the `Server Directory` if not, 
```
npm install aws-sdk
```
5. Start the Express.js server and Use Insomnia to inspect the responses. This should appear: 🌎  ==> API Server now listening on PORT 3001!
```
node ./server/server.js
```
6. Create CRUD routes in insomnia to make sure application is working
* `GET` all thoughts
```
localhost:3001/api/users
```
* `GET` all thoughts from a user
```
localhost:3001/api/users/Ray%20Davis
```
* `CREATE` a thought
```
localhost:3001/api/users
```  

## Screenshots