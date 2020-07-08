const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    list: [
      {id:1,country:'用户名',sys:'Simen'},
      {id:2,country:'邮箱',sys:'simen313523778@gmail.com'},
      {id:3,country:'手机号',sys:'1238739824'},
      {id:4,country:'生日',sys:'1239/3/32'},
      {id:5,country:'所在城市',sys:'加州'},
    ]
  },


  onLoad: function (options) {

  },

  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  onReady: function () {

  },

  
})