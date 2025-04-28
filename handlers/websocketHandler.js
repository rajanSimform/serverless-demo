module.exports.handler = async (event) => {
  console.log('WebSocket Event:', event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'WebSocket event processed' }),
  };
};