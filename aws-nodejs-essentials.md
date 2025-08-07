# AWS Essentials for Node.js Developers

A reference for key AWS services with Node.js code examples.

---

## 1. Amazon S3

**Description:** Object storage for files, assets, and static site hosting.

**Node.js Example (List Buckets):**
```js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
s3.listBuckets((err, data) => {
  if (err) console.log(err);
  else console.log(data.Buckets);
});
```

---

## 2. AWS Lambda

**Description:** Serverless compute—run Node.js code without provisioning servers.

**Node.js Example (Handler):**
```js
exports.handler = async (event) => {
  return { statusCode: 200, body: 'Hello from Lambda!' };
};
```

---

## 3. Amazon DynamoDB

**Description:** Managed NoSQL database service.

**Node.js Example (List Tables):**
```js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
dynamodb.listTables({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data.TableNames);
});
```

---

## 4. Amazon RDS

**Description:** Managed relational databases (MySQL, PostgreSQL, etc).

**Node.js Example (MySQL Query via RDS Endpoint):**
```js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'username',
  password: 'password',
  database: 'dbname'
});
connection.connect();
connection.query('SELECT NOW()', (err, results) => {
  if (err) throw err;
  console.log(results);
  connection.end();
});
```

---

## 5. Amazon API Gateway

**Description:** Create and manage REST APIs for your Node.js backend/Lambda.

**Node.js Example (API Gateway Event Handler):**
```js
exports.handler = async (event) => {
  // event contains HTTP request data
  return { statusCode: 200, body: JSON.stringify({ message: 'API Gateway works!' }) };
};
```

---

## 6. AWS IAM

**Description:** Securely manage access/permissions for AWS resources.

**Node.js Example (List Users):**
```js
const AWS = require('aws-sdk');
const iam = new AWS.IAM();
iam.listUsers({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data.Users);
});
```

---

## 7. AWS Secrets Manager

**Description:** Store/retrieve sensitive configuration secrets.

**Node.js Example (Get Secret Value):**
```js
const AWS = require('aws-sdk');
const secrets = new AWS.SecretsManager();
secrets.getSecretValue({ SecretId: 'your-secret-id' }, (err, data) => {
  if (err) console.log(err);
  else console.log(data.SecretString);
});
```

---

## 8. Amazon SQS

**Description:** Simple Queue Service for decoupled microservices.

**Node.js Example (Send Message):**
```js
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();
sqs.sendMessage({
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456789012/MyQueue',
  MessageBody: 'Hello from Node.js!'
}, (err, data) => {
  if (err) console.log(err);
  else console.log(data.MessageId);
});
```

---

## 9. Amazon SNS

**Description:** Simple Notification Service for pub/sub messaging.

**Node.js Example (Publish Message):**
```js
const AWS = require('aws-sdk');
const sns = new AWS.SNS();
sns.publish({
  TopicArn: 'arn:aws:sns:us-east-1:123456789012:MyTopic',
  Message: 'Hello from Node.js SNS!'
}, (err, data) => {
  if (err) console.log(err);
  else console.log(data.MessageId);
});
```

---

## 10. AWS CloudWatch

**Description:** Monitoring, metrics, and logging.

**Node.js Example (Put Custom Metric):**
```js
const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();
cloudwatch.putMetricData({
  MetricData: [{
    MetricName: 'MyCustomMetric',
    Unit: 'Count',
    Value: 1
  }],
  Namespace: 'MyApp'
}, (err, data) => {
  if (err) console.log(err);
  else console.log('Metric sent!');
});
```

---

## 11. AWS Elastic Beanstalk

**Description:** Easy deployment/scaling for Node.js apps.

**Node.js Example:**  
_Deploy your app using `eb init` and `eb deploy` from the CLI. Your app code remains unchanged (just your Node.js app)._

---

## 12. Amazon CloudFront

**Description:** CDN for fast, global content delivery.

**Node.js Example:**  
_You do not interact with CloudFront from Node.js directly. Instead, set it up in the AWS Console to point to your S3, API Gateway, or EC2._

---

For more details, check the [AWS SDK for JavaScript Documentation](https://docs.aws.amazon.com/sdk-for-javascript/).