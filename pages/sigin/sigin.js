const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    show:'password',
    isshow: 1,
  },

  onLoad: function (options) {

  },
  // 返回
  back:function(e){
    wx.navigateBack({
      delta: 1,
    })
  },
  look: function(e){
    let isshow = this.data.isshow
    console.log(isshow)
    if(isshow == 1){
      this.setData({
        show:'text',
        isshow:2
      })
      
    }
    if(isshow == 2){
      this.setData({
        show:'password',
        isshow:1
      })
    }
  },
  // 登录页面
  jumplog:function(){
    wx.showToast({
      title: '正在跳转中...',
      icon: 'success',
      duration: 1000
    })
    wx.navigateTo({
      url: '../login/login',
    })
  }
})