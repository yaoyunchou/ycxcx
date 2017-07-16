Page({
  data: {
    latitude: 30.372903,
    longitude: 111.453069,
    markers: [{
      latitude: 30.372903,
      longitude: 111.453069,
      name: '向明机电维修'
    }],
    covers: [{
      latitude: 30.372903,
      longitude: 111.453069,
      iconPath: '/image/location.png'
    }, {
        latitude: 30.372903,
        longitude: 111.453069,
      iconPath: '/image/location.png'
    }]
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
})
