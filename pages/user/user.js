const app = getApp();
let userInfo = app.globalData.userInfo;
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
  },

  onLoad: function (options) {
    
    var that = this;
    //获得设备信息
    wx.getSystemInfo({
      success (res) {
        console.log(res.windowHeight);
        that.setData({
          phoneHeight: res.windowHeight,
        })
      }
    })
    // 查看是否授权
    if (app.globalData.userInfo === null) {
      that.setData({
        login: true
      })
    } else {
      that.setData({
        login: false,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName,
      })
    }
  },
  // 获取用户的头像和昵称信息
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo.avatarUrl)
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        // console.log(e.detail.userInfo);
        app.globalData.userInfo = e.detail.userInfo;
        that.setData({
          login: false,
          avatarUrl: e.detail.userInfo.avatarUrl,
          nickName: e.detail.userInfo.nickName,
          tou:e.detail.userInfo.avatarUrl
        })
      }
    })    
  },
  // 详细信息
  jumpprinfo:function(){
    wx.navigateTo({
      url: '../user/pinfor/pinfor',
    })
  },
  // 设置
  sz:function(e){
    wx.navigateTo({
      url: '../user/setup/setup',
    })
  },
  // 帮助中心
  bz:function(){
    wx.navigateTo({
      url:'../user/help/help'
    }) 
  }

})