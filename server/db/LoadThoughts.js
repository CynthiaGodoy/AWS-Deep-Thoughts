//use the aws-sdk to create the interface with DynamoDB
const AWS = require('aws-sdk');
const fs = require('fs');

//This class offers a level of abstraction that enables us to use JavaScript objects as arguments and return native JavaScript types. This constructor helps map objects, which reduces impedance mismatching and speeds up the development process.
AWS.config.update({
    region: 'us-east-2',
    });
        const dynamodb = new AWS.DynamoDB.DocumentClient({
        apiVersion: '2012-08-10',
    });

//use the fs package to read the users.json file and assign the object to the allUsers constant
console.log('Importing thoughts into DynamoDB. Please wait.');
const allUsers = JSON.parse(
    fs.readFileSync('./server/seed/users.json', 'utf8'),
);

// loop over the allUsers array and create the params object with the elements in the array. In the loop, we assigned the values from the array elements in the Item property
allUsers.forEach(user => {
    const params = {
        TableName: "Thoughts",
        Item: {
            "username": user.username,
            "createdAt": user.createdAt,
            "thought": user.thought
        }
};

//make a call to the database with the service interface object, dynamodb. In the preceding statement, we used the same pattern that we used to create the table, but this time we used the PUT method.
dynamodb.put(params, (err, data) => {
    if (err) {
        console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("PutItem succeeded:", user.username);
    }
    });
});
