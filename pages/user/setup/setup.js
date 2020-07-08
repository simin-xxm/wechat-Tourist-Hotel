const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
  },

  onLoad: function (options) {

  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  rmb:function(){
    wx.navigateTo({
      url: '../setup/rmb/rmb',
    })
  }
})