
const app = getApp()

Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
  },

  onLoad: function (options) {

  },
  // 开始
  welcome:function(e){
    wx.showToast({
      title: '马上开始旅程...',
      icon: 'success',
      duration: 500
    })
    wx.navigateTo({
      url: '../welcome/guide/guide',
    })
  },

  // 登录

  jumpLog: function(e){
    wx.navigateTo({
      url: '../login/login',
    })
  },

})