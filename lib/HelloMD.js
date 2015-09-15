var request = require('request'),
    _ = require('lodash'),
    debug = require('debug')('HelloMD'),
    HelloMDError = require('./HelloMDError'),
    url = require('url'),
    Q = require('q');

var defaultOptions = {
  endpoint: 'https://www.hellomd.com/api/v1'
};

function HelloMD(apiKey, apiSecret, options) {
  if (_.isObject(apiKey) && !_.isString(apiKey) && apiKey.apiSecret && apiKey.apiKey) {
    apiSecret = apiKey.apiSecret;
    options = _.omit(apiKey, 'apiSecret', 'apiKey');
    apiKey = apiKey.apiKey;
  }

  if (!apiKey) {
    throw new HelloMDError('Invalid API Key: ' + apiKey);
  }

  if (!apiSecret) {
    throw new HelloMDError('Invalid API Secret: ' + apiSecret);
  }

  this.apiKey = apiKey;
  this.apiSecret = apiSecret;

  this.options = _.defaults(options || {}, HelloMD.defaultOptions);

  this.endpoint = this.options.endpoint;
}

HelloMD.defaultOptions = defaultOptions;

HelloMD.prototype.request = function(method, path, parameters, cb) {
  debug('Requesting [%s] %s with data %o', method, path, parameters);

  var stringUrl = this.endpoint + path;

  var requestOptions = {
    method: method,
    url: url.parse(stringUrl)
  };

  requestOptions.qs = parameters;
  requestOptions.headers = {
    'Accept': 'application/json'
  };

  requestOptions.auth = {
      'username' : this.apiKey,
      'password' : this.apiSecret
    };

  var deferred = Q.defer();

  request(requestOptions, function(err, res, data) {
    if (err) {
      return deferred.reject(err);
    }

    var parsed;
    if (data) {
      debug('Received response %s', data);

      try {
        parsed = JSON.parse(data);

        if (parsed && (parsed.error || parsed.errors)) {
          err = new HelloMDError(data);

          return deferred.reject(err);
        }
      } catch (exception) {
        return deferred.reject(exception);
      }
    }

    return deferred.resolve(parsed || data);
  });

  return deferred.promise.nodeify(cb);
};

HelloMD.prototype.getUser = function(userId, cb) {
  return this.request('GET', '/users/'+userId, {}, cb);
};

module.exports = HelloMD;