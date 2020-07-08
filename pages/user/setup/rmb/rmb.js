const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    list: [
      {id:1,country:'澳大利亚',sys:'AUD'},
      {id:2,country:'阿根廷',sys:'ARS'},
      {id:3,country:'比利时',sys:'EURO'},
      {id:4,country:'巴西',sys:'REAL'},
      {id:5,country:'中国',sys:'RMB'},
      {id:6,country:'加拿大',sys:'CAD'},
      {id:7,country:'法国',sys:'ERAO'},
      {id:8,country:'相干',sys:'HKD'},
      {id:9,country:'意大利',sys:'EURO'},
    ]
  },

  onLoad: function (options) {

  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },

})