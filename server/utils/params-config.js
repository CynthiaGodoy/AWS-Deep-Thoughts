const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
        Bucket: 'user-images-26ebe6e3-a8fe-4455-b06a-a21bbac2f2dc',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        };

    return imageParams;
};

module.exports = params;
