const _ = require('../common/utils');
const http = require('../common/http');
var consts = require('../common/const');

function saveRecord(data) {
  let openid = consts.auth.openid;
  let appId = consts.APPID;
  // return http.post('kwIndex/record/add', {
  //   openid,
  //   appId,
  //   requestMap: data
  // });

  return http.http({
    method:'post',
    url: 'kwIndex/record/add',
    data: data,
    params: {
      openid,
      appId
    }
  });
}

function getRecord(userId) {
  var userId = wx.getStorageSync('userid');
  return http.get('kwIndex/record', {
    userId
  });
}

function removeItems(items) {
  var recordIds = _.map(items, x => x.recordId);
  return http.delete('kwIndex/record', recordIds);
}

module.exports = {
  saveRecord,
  getRecord,
  removeItems
};