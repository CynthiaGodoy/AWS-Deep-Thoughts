// Load the AWS SDK for Node.js CREATE INTERFACE BETWEEN NODE.JS & AWS Responsible for the API that allows the app to communicate with the web service.
const AWS = require('aws-sdk');
// import AWS object without services
// var AWS = require('aws-sdk/global');
// import individual service
// var S3 = require('aws-sdk/clients/s3');

const { v4: uuidv4 } = require('uuid');

// Set the region to communicate with the web service
AWS.config.update({ region: 'us-east-2' });

// Expression that create S3 service object with the designated API
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling createBucket. bucketParams object that assigns the metadata of the bucket.
var bucketParams = {
    Bucket: 'user-images-' + uuidv4(),
    };

// callback function to create S3 instance with createBucket method and bucketParams Object. 
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success');
    }
});

