//index.js
//获取应用实例
var app = getApp();
var data = require('../../pageInfos');
if (!data.isPlay) {
  data.isPlay = false;
}
var currentPageInfo = {};
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.seek(0);

  },
  data: {
    motto: 'Hello World',
    state: [
      { url: "goods", name: '商品' },
      { url: "calendar", name: "日历" }
    ],
    lastDate: formatTime(new Date()),
    currentPage: 0,
    pageInfo: {},
    musicStop: "http://wxxcx.nsw99.com/images/music-stop.png",
    musicStart: "http://wxxcx.nsw99.com/images/music-start.png",
    name: '梦の探求者',
    author: '许巍',
    src: '',
  },
  audioPlay: function (e) {
    this.setData({
      isPlay: true,
    });
    console.log(this.data.src);
    data.isPlay = true;
    this.audioCtx.play();
  },
  audioPause: function () {
    this.setData({
      isPlay: false
    });
    data.isPlay = false;
    this.audioCtx.pause();
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goCalendar: function () {
    wx.redirectTo({
      url: '../calendar/calendar'
    })
  },
  otherPage: function (option) {
     
    if (this.data.currentPage === 0) {
      this.setData({
        currentPage: 1
      });
       this.audioCtx.setSrc('http://wxxcx.nsw99.com/audio/day' + currentPageInfo.date + 'b.m4a');
      if (data.isPlay) {
       this.audioCtx.play();
      }
    } else {
      this.setData({
        currentPage: 0
      });
      this.audioCtx.setSrc('http://wxxcx.nsw99.com/audio/day' + currentPageInfo.date + 'a.m4a')
      if (data.isPlay) {
        this.audioCtx.play();

      }
    }
  },
  onUnload: function () {
    wx.getStorage({
      key: "lastTime",
      success: function (res) {
        var time = (new Date() - res.data) / 60 * 60 * 24 * 1000;
        if (time > 1) {
          wx.setStorage({
            key: "lastTime",
            data: new Date()
          })
          wx.setStorage({
            key: "lastDate",
            data: formatTime(new Date())
          })
        }
      },
      fail: function () {
        wx.setStorage({
          key: "lastTime",
          data: new Date()
        })
      }
    });

  },
  onShow: function (option) {
    var that = this
    var date = app.globalData.selectedData;
    currentPageInfo.date = date;
    that.audioCtx = that.audioCtx || wx.createAudioContext('myAudio');
    that.audioCtx.setSrc('http://wxxcx.nsw99.com/audio/day' + currentPageInfo.date + 'a.m4a');
    if (data.isPlay) {
     
      that.audioCtx.play();
    }
    console.log(that.data.src);
    wx.getStorage({
      key: 'lastDate',
      success: function (res) {
        that.setData({
          lastDate: res.data
        })
      }
    })

    this.setData({
      pageInfo: data[date - 1],
      isPlay: data.isPlay,
      currentPage: data[date - 1].currentPage
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onShareAppMessage: function () {
    return {
      title: '牛商经营哲学',
      path: '/pages/index/index?id=' + currentPageInfo.date
    }
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