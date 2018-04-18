//index.js
var modal = require('../../../common/modal');
var getDetail = require('../../../services/infomation.service').getDetail;
Page({
  onReady: function (e) {
    
  },
  data: {
    currentItem:{}
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: this.data.currentItem.title,
      path: 'pages/index/detail/index?id=' + this.data.currentItem._id
    }
  },
  onLoad: function (option) {
    //console.log(option)
    getDetail(option.id).then((res)=>{
      console.log(res);
      this.setData({
        currentItem: res.data,
      });
    })

    
  }
});
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return year + "/" + month + "/" + day;
}