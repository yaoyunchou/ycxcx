const _ = require('../common/utils');
const http = require('../common/http');
const consts = require('../common/const');



function getInfomation(options) {
  return http.get('infomation/list', options);
}
function getDetail(id) {
  return http.get('infomation/detail/'+id);
}




module.exports = {
  getInfomation,
  getDetail
};