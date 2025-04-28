module.exports.handler = async () => {
  const snsTopicArn = process.env.SNS_TOPIC_ARN;
  const sqsQueueUrl = process.env.SQS_QUEUE_URL;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Dynamic configuration based on environment',
      snsTopicArn,
      sqsQueueUrl,
    }),
  };
};