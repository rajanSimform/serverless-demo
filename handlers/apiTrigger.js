module.exports.handler = async (event) => {
  console.log("API Triggered Function Invoked!", event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "API trigger function executed!" }),
  };
};