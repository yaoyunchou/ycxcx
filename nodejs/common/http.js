var utils = require('./utils');
var consts = require('./const');

function http(options) {
  var basUrl = consts.API_SERVER;
  options.method = options.method || 'GET';
  var url = /http:|https:/.test(options.url) ? options.url : basUrl + options.url;

  if (options.params) {
    utils.each(options.params, (param, key) => {
      if (/\?/.test(url)) {
        url += `&${key}=${param}`;
      } else {
        url += `?${key}=${param}`;
      }
    });
  }

  return new Promise(function(resolve, reject) {
    utils.wrapPromise(wx.request, {
      url: url,
      data: options.data,
      method: options.method.toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: options.header, // 设置请求的 header)
    }).then(res => {
      if (utils.isUndefined(res.isSuccess) && res.data && utils.isDefined(res.data.isSuccess)) {
        res = res.data;
      }
      if (utils.isUndefined(res.isSuccess) || res.isSuccess) {
        var data = options.responseRaw ? res : res.data;
        resolve(data);
      } else {
        reject(res);
      }
    }, err => {
      reject(res);
    });
  })
}

function get(url, params) {
  return module.exports.http({
    url,
    params
  });
};

function post(url, data) {
  return module.exports.http({
    method: 'post',
    url,
    data
  });
};

function put(url, data) {
  return module.exports.http({
    method: 'put',
    url,
    data
  });
};

function httpDelete(url, data) {
  return module.exports.http({
    method: 'delete',
    url,
    data
  });
};


module.exports = {
  http,
  get,
  put,
  post,
  delete: httpDelete
};