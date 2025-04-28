const { SNS } = require('@aws-sdk/client-sns');
const sns = new SNS();


module.exports.handler = async (event) => {
  const message = JSON.parse(event.body).message || "Default SNS Message";
  const params = {
    Message: message,
    TopicArn: process.env.SNS_TOPIC_ARN,
  };

  await sns.publish(params).promise();
  console.log("Message sent to SNS:", message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "SNS message published successfully!" }),
  };
};
