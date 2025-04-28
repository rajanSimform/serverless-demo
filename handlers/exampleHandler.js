const Sentry = require('@sentry/aws-serverless');

// Initialize Sentry outside the handler
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  sendDefaultPii: true, // Optional: Sends user-related data like headers and IP
  tracesSampleRate: 1.0, // Optional: Adjust for production
});

exports.handler = Sentry.wrapHandler(async (event, context) => {
  // Intentionally throw an error to test Sentry
  if (event.queryStringParameters && event.queryStringParameters.testError) {
    throw new Error('Intentional test error for Sentry');
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Sentry layer example handler executed successfully!' }),
  };

  return response;
});