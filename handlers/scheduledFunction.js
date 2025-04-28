module.exports.handler = async () => {
  console.log("Scheduled function executed at:", new Date().toISOString());
  return { message: "Scheduled function ran successfully!" };
};
