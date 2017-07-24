var platformModalSvc = {};

platformModalSvc.showModal = function(title, content) {
  return new Promise((resolve, reject) => {
    var options = {
      confirmColor: '#f08200',
      title: title || '提示',
      showCancel: false,
      content: content || '',
      success: function(res) {

        if (res.confirm) {
          resolve({
            isSuccess: true
          });
        } else if (res.cancel) {
          reject({
            isSuccess: false
          })
        }

      }
    }
    wx.showModal(options);
  })
}
platformModalSvc.showConfirmModal = function(title, content) {
  return new Promise((resolve, reject) => {
    var options = {
      confirmColor: '#f08200',
      title: title || '提示',
      content: content || '',
      success: function(res) {

        if (res.confirm) {
          resolve({
            isSuccess: true
          });
        } else if (res.cancel) {
          reject({
            isSuccess: false
          })
        }

      }
    }
    wx.showModal(options);
  })
}
platformModalSvc.showSuccessTip = function(title) {
  return new Promise((resolve, reject) => {
    var options = {
      title: title || '',
      image: "/images/success.png",
      success: () => {
        resolve(true);
      },
      fail: () => {
        resolve(true);
      }
    }
    wx.showToast(options);
  })
}
platformModalSvc.showWarningTip = function(title) {
  return new Promise((resolve, reject) => {
    var options = {
      title: title || '',
      image: "/images/warning.png",
      success: () => {
        resolve(true);
      },
      fail: () => {
        resolve(true);
      }
    }
    wx.showToast(options);
  })
}
module.exports = platformModalSvc;