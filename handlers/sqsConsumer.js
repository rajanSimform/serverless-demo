const { SQS } = require('@aws-sdk/client-sqs');
const sqs = new SQS();

module.exports.handler = async (event) => {
  const queueUrl = process.env.SQS_QUEUE_URL;

  for (const record of event.Records) {
    console.log("Processing SQS Message:", record.body);

    // Delete message from queue after processing
    const deleteParams = {
      QueueUrl: queueUrl,
      ReceiptHandle: record.receiptHandle,
    };

    try {
      await sqs.deleteMessage(deleteParams);
      console.log("Message deleted from queue:", record.messageId);
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  }

  return { message: "SQS messages processed and deleted" };
};
