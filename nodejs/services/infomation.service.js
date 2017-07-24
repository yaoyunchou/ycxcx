const _ = require('../common/utils');
const http = require('../common/http');
const consts = require('../common/const');



function getInfomation() {
  return http.get('infomation/list',{});
}



module.exports = {
  getInfomation
};