const _ = require('../common/utils');
const http = require('../common/http');
const consts = require('../common/const');



function getLoginUser(appId, openid) {
  return http.get('kwIndex/user', {
    openid,
    appId
  });
}

function sendSmsCode(phoneNum) {
  return http.post('wxsms/sendVerificationCode', {
    phoneNum:phoneNum
  });
}
/**
 * 约定在点击下一步的时候进行验证的验证,和手机号码合法性的验证
 * 
 * @param {any} code 
 * @param {any} phoneNum 
 */
function checkCode(code,phoneNum){
  return http.get('kwIndex/code',{
    code:code,
    phoneNum:phoneNum
  })
}
function saveUser(data) {
  data.appId = consts.APPID;
  data.openid = consts.auth.openid;
  return http.post('kwIndex/user/add', data);
}
/**
 * 获取用户的记录
 * 
 * @param {any} userId 
 */
function getUserRecord(userId) {
  return http.get('kwIndex/record', {
    userId:userId
  });
}
/**
 * 删除用户记录
 * 
 * @param {Array} list 
 * @returns 
 */
function deleteUserRecord(list) {
  return http.delete('kwIndex/record', {
    recordIds:list
  })
}
/**
 * 获取用户收藏的关键词
 * 
 * @param {string} userId 
 * @returns 
 */
function getCollectedKeyword(userId) {
  return http.get('kwIndex/keyword', {
    userId:userId
  });
}

/**
 * 
 * 
 * @param {any} email 
 * @param {any} data 
 * @returns 
 */
function exportEmail(email,data,userId){
  return http.post('kwIndex/keyword/exportToEmail',{
    email:email,
    userId:userId,
    content:data
  })
}
/**
 * 删除关键词
 * 
 * @returns 
 */
function deleteKeyword(kwIds){
  return http.delete('kwIndex/keyword',{
      kwIds:kwIds
  })
}
/**
 * 提交用户反馈意见
 * 
 * @param {string} message 
 * @param {string} userId 
 * @returns 
 */
function kwUserMessage(message,userId){
  return http.post('kwIndex/user/msg',{
    content:message,
    userId:userId
  })
}

module.exports = {
  getLoginUser,
  sendSmsCode,
  saveUser,
  getUserRecord,
  deleteUserRecord,
  getCollectedKeyword,
  deleteKeyword,
  exportEmail,
  checkCode,
  kwUserMessage
};