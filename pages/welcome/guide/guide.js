

const app = getApp()
Page({


  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    none: 'none',
    hide: ''
  },

  
  onLoad: function (options) {

    

  },
  monitor:function(e){
    let current = e.detail.current
    console.log(current)
    
    if(current !=0){
      this.setData({
        none:'block',
        hide:'none'
      })
    }else{
      this.setData({
        none:'none',
        hide:'block'
      })
    }
    
  },

  // 跳转登录注册

  jumpLog: function(e){
    wx.navigateTo({
      url: '../../login/login',
    })
  },
  jumpSig: function(e){
    wx.navigateTo({
      url: '../../sigin/sigin',
    })
  }

})