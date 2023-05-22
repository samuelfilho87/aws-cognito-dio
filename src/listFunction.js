var AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    try {
        const response = await dynamoDBClient
            .scan({ TableName: 'tasks' })
            .promise();

        const tasks = response.Items;

        return {
            statusCode: 200,
            body: JSON.stringify({ tasks })
        };
    } catch (error) {
        return {
            statusCode: 422,
            body: JSON.stringify(error)
        };
    }
};
