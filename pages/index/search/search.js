// pages/index/search/search.js
const app= getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom
  },

  
  onLoad: function (options) {
      console.log(options);
  },
  // 返回
  return: function(e){
    wx.navigateBack({
      delta: 1,
    })
  }
  

})