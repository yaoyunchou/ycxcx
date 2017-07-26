
var app = getApp()
Page({
  data: {
    systemInfo: {},
    userInfo:{}
  },
  onLoad:function(){
    var that = this
    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
    this.getSystemInfo();
    this.getNetworkType();
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
        })
        that.update()
      }
    })
  },
  getNetworkType: function () {
    var that = this
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
        that.update()
      }
    })
  },
  clear: function () {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})
