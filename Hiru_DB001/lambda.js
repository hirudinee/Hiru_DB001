let AWS = require('aws-sdk');
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


	callback(null, 'Successfully executed');
}