//use the package multer to provide the middleware for handling multipart/form-data, primarily used for uploading files. The multer package will add a file property on the req object that contains the image file uploaded by the form
const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/params-config');

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    },
});

// image is the key! function, upload, to store the image data from the form data received by the POST route. We'll use the single method to define that this upload function will receive only one image. We'll also define the key of the image object as image.
const upload = multer({ storage }).single('image');

//instantiate the service object, s3, to communicate with the S3 web service, which will allow us to upload the image to the S3 bucket. As a best practice, we normally keep the object declaration near the top of the file, with the other object declarations.
//Note that the preceding endpoint will be located at localhost:3000/api/image-upload
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    });

//the callback function to catch any internal errors with the web service and log error and success messages accordingly. In the last statement of this route, we send the data retrieved from S3 back to the client. The data will contain the image file's metadata, including the URL, bucket name, file name, and more
router.post('/image-upload', upload, (req, res) => {
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);

    // set up S3 service call
    s3.upload(params, (err, data) => {
        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.json(data);
    });
});

module.exports = router;
