module.exports.handler = async (event) => {
  console.log('S3 Event:', JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'S3 event processed' }),
  };
};