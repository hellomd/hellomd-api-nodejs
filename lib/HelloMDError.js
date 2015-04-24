var util = require('util');

function AbstractError(message, constr) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, constr || this);

  this.name = 'AbstractError';
  this.message = message;
}

util.inherits(AbstractError, Error);

function HelloMDError(message) {
  AbstractError.apply(this, arguments);
  this.name = 'HelloMDError';
  this.message = message;
}

util.inherits(HelloMDError, AbstractError);

module.exports = HelloMDError;