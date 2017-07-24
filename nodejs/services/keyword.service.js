const _ = require('../common/utils');
const http = require('../common/http');

function getKeywordList(recordId) {
  return new Promise((resolve, reject) => {
    http.get('kwIndex/keyword/list', {
      recordId
    }).then((data) => {

      resolve({data});
    }, (err) => {
      reject(err);
    });
  })

}

function toggleCollected(id, isCollected) {
  return http.put('kwIndex/keyword',{ kwId:id, isCollected:isCollected});
}

function getCollectedItems() {
  var userId = wx.getStorageSync('userid');
  return http.get('kwIndex/keyword', {
    userId
  });
}

function removeKeywords(items) {
  var kwIds = _.map(items, x => x.kwId);
  return http.delete('kwIndex/keyword', {
    userId
  });
}

/**
 * 将数组中的没有选中的项目删除掉,将grounp中没有了item的grounp删除掉
 *
 * @param {Array} data 
 */
function getselectedItems(data){
    var backData = []
    data.forEach(function(v,k){
        let seletedKeywords = v.keywords.filter(function(e){
            return e.isSelected;
        })
        if(seletedKeywords.length>0){
           v.keywords = seletedKeywords;
          backData.push(v);
        }
    });
    return {groups:backData};
}
/**
 * 
 * 
 * @param {string} email 
 * @param {array} data 
 * @param {string} userId
 * @returns 
 */
function exportEmail(email,data,userId){
  return http.post('kwIndex/keyword/exportToEmail',{
    email:email,
    userId:userId,
    content:data
  })
}
module.exports = {
  getKeywordList,
  toggleCollected,
  getCollectedItems,
  removeKeywords,
  getselectedItems,
  exportEmail
};