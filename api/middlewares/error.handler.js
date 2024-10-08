const { stack } = require('../routes/products.router');

function logErrors(err, req, res, next) {
  console.log('LogErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('ErrorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  console.log('BoomErrorHandler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
