const AWS = require('aws-sdk');

//modify the AWS config object that DynamoDB will use to connect to the local instance.
AWS.config.update({
    region: 'us-east-2',
});

//create the DynamoDB service object by adding the following expression.By specifying the API version in the preceding statement, we ensure that the API library we're using is compatible with the following commands. This is also the latest long-term support version, or LTS.
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//create a params object that will hold the schema and metadata of the table.
const params = {
    TableName: 'Thoughts',
    //which is where we define the partition key and the sort key.
    KeySchema: [
      { AttributeName: 'username', KeyType: 'HASH' }, // Partition key
      { AttributeName: 'createdAt', KeyType: 'RANGE' }, // Sort key
    ],
    //This defines the attributes we've used for the hash and range keys.
    AttributeDefinitions: [
        { AttributeName: 'username', AttributeType: 'S' },
        { AttributeName: 'createdAt', AttributeType: 'N' },
    ],
    //This setting reserves a maximum write and read capacity of the database
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
    },
};

//use params to make a call to the DynamoDB instance and create a table. Pass in the params object and use a callback function to capture the error and response.
dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error(
            'Unable to create table. Error JSON:',
        JSON.stringify(err, null, 2),
        );
        } else {
            console.log(
                'Created table. Table description JSON:',
            JSON.stringify(data, null, 2),
        );
        }
});
