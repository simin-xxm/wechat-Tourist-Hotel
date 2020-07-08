const app = getApp()
Page({


  data: {

    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    umail:app.data.umail,
    upwd:app.data.upwd,
    umails:'',
    upwds:'',
    none:'none',
    show:'password',
    isshow: 1,
    data:1
  },

  onLoad: function (options) {
    // console.log(this.data.upwd)
    
  },
  // 返回
  back:function(e){
    wx.navigateBack({
      delta: 1,
    })
  },
  // 是否看见密码
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
  // 邮箱框失去焦点
  losemail:function(e){
    let value = e.detail.value;
    this.setData({
      umails:value
    })
  },
  // 密码框失去焦点
  losepass:function(e){
    let value = e.detail.value;
    this.setData({
      upwds:value
    })
  },
  // 判断是否正确
  iflog:function(e){
    let umail = this.data.umail;
    let upwd = this.data.upwd;
    let umails = this.data.umails;
    let upwds = this.data.upwds;
    console.log(e);
    // console.log(umail);
    // console.log(upwd);
    // console.log(umails);
    // console.log(upwds);
    if (umail == umails && upwd == upwds){
        wx.showToast({
          title: '正在前往首页',
          icon: 'success',
          duration: 1500
        })
        wx.switchTab({
          url:'../index/index'
        })
    }else{
      this.setData({
        none: 'block'
      })
    }
  },
  // input得到焦点 提示语消失

  getfocus:function(e){
    this.setData({
      none:'none'
    })
  },
  // 注册页
  jumpsig:function(){
    wx.showToast({
      title: '正在跳转中...',
      icon: 'success',
      duration: 1000
    })
    wx.navigateTo({
      url: '../sigin/sigin',
    })
  }
 
})