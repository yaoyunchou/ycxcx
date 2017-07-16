//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pages: [
      {
        icon:"icon-ditu",
        zh: '湖北省宜昌市宜都市杨守敬大道尤家苑小区',
        url: 'map/map'
      },
      {
        icon: "icon-shijian",
        zh: '8:00-21:00',
      }
      ,
      {
        icon: "icon-dianhua",
        zh: '13997700133',
        phone:'13997700133'
      }
      ,
      {
        icon: "icon-tupian",
        zh: '图片',
      }
    ]
  },
  onShareAppMessage: function (res) {
    return {
      title: '向明机电维修',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '13997700133'
    })
  }
  
})
