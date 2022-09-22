const express = require('express');
const router = express.Router();

//We use the DocumentClient class to use native JavaScript objects to interface with the dynamodb service object. We're also setting the table value to "Thoughts"
const AWS = require('aws-sdk');
const awsConfig = {
    region: 'us-east-2',
};

AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = 'Thoughts';

//The first route needs the GET method at the /api/users/ endpoint. We'll be retrieving all the users' thoughts from the Thoughts table. In the preceding statement, we assign "Thoughts" to the TableName property in the params object.
router.get('/users', (req, res) => {
    const params = {
        TableName: table,
    };
    // Scan return all items in the table. use the scan method to return all the items of the table. We also added a status code in case there was an internal error with retrieving the data from the table. Notice that the data in the table is actually in the Items property of the response, so data.Items was returned.
    dynamodb.scan(params, (err, data) => {
        if (err) {
            res.status(500).json(err); // an error occurred
        } else {
            res.json(data.Items);
        }
    });
});

// get thoughts from a user. use query parameters to pass the username from the client to the server. We'll capture the query parameter with the req.params object.
router.get('/users/:username', (req, res) => {
    console.log(`Querying for thought(s) from ${req.params.username}.`);

// declare params to define the query call to DynamoDB. We'll use the username retrieved from req.params to provide a condition for the query.
    const params = {
        TableName: table,
        //This determines which attributes or columns will be returned. This is similar to the SELECT statement in SQL, which identifies which pieces of information is needed
        ProjectionExpression: '#th, #ca',
        //WHERE clause in SQL, the KeyConditionExpression property is used to filter the query with an expression.
        KeyConditionExpression: '#un = :user',
        //the ExpressionAttributeValues property is assigned to req.params.username, which was received from the client. the username selected by the user in the client to determine the condition of the search. This way, the user will decide which username to query.
        ExpressionAttributeNames: {
        '#un': 'username',
        '#ca': 'createdAt',
        '#th': 'thought',
        },
            ExpressionAttributeValues: {
            ':user': req.params.username,
        },
            ProjectionExpression: '#th, #ca',
            //This property takes a Boolean value. The default setting is true, which specifies the order for the sort key, which will be ascending
            ScanIndexForward: false,
        };
    //We pass in the params object and a callback function to handle the response. The first conditional expression will return an internal request error with a status code of 500 if there's a problem with the query request to the database. All other responses will be considered a successful operation. Again we send the data.Items object back to the client. The response data from the database is located in the Items property of the response.
    dynamodb.query(params, (err, data) => {
        if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
        } else {
            console.log('Query succeeded.');
            res.json(data.Items);
        }
    });
});

// Create new user. set the params object to the form data of the ThoughtForm, which we can access with req.body. Also notice that we use the JavaScript native Date object to set the value of the createdAt property. This is so that we know when this thought from the user was posted. Remember that we used the createdAt property as the sort key, which will help us sort the thoughts chronologically when we want to render them in the profile page.
router.post('/users', (req, res) => {
    const params = {
        TableName: table,
        Item: {
            username: req.body.username,
            createdAt: Date.now(),
            thought: req.body.thought,
        },
    };

    //database call. use the put method to add an item to the Thoughts tables.
    dynamodb.put(params, (err, data) => {
        if (err) {
        console.error(
            'Unable to add item. Error JSON:',
            JSON.stringify(err, null, 2),
        );
            res.status(500).json(err); // an error occurred
        } else {
            console.log('Added item:', JSON.stringify(data, null, 2));
            res.json({ Added: JSON.stringify(data, null, 2) });
        }
    });
});

module.exports = router;
