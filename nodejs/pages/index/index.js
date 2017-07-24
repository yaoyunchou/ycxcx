var modal = require('../../common/modal');
var getInfomation = require('../../services/infomation.service').getInfomation;

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    datalist:[],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onShareAppMessage: function (res) {
    return {
      title: '小飞鱼设计',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onShow: function (options) {
    getInfomation().then((res)=>{
      console.log(res);
      this.setData({
        dataList: res
      })
    });
  }
})