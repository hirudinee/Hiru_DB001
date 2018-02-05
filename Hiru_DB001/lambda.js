let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.put({
		TableName: 'testhiru',
		Item: {
			'Name': 'Hiru',
			'ID': '001',
			'sample': '01'
		}
	}, function (err, data) {
		if (err) {
			console.log(err);
		} else {
			//your logic goes here
			console.log(data);
		}
	});

	rds.beginTransaction({
		instanceIdentifier: 'hirudinee'
	}, function (error, connection) {
		if (error) { throw err; }
	});


	callback(null, 'Successfully executed');
}