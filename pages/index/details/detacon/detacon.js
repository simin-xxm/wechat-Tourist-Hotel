const app = getApp()

Page({


  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    no:'1',
    score:[
      {m:'房间',w:'38%'},
      {m:'服务',w:'20%'},
      {m:'位置',w:'40%'},
      {m:'价格',w:'80%'},
    ],
    comment:[
      {id:1,name:'杰克马',pf:'10',time:'5分钟前',
      txt:'这是一个非常很棒的地点，靠近商店和酒吧，非常安静的位置。',
      icon:'http://img0.imgtn.bdimg.com/it/u=2199140864,451836814&fm=26&gp=0.jpg'},
      {id:2,name:'aliya',pf:'8.0',time:'3小时前',
      txt:'老实说，这是我住过的最好的酒店，酒店的服务超级好，环境没得说，推荐给大家啊',
      icon:'http://img3.imgtn.bdimg.com/it/u=1368451564,780267377&fm=11&gp=0.jpg'},
      {id:3,name:'simen',pf:'9.0',time:'2小时钟前',
      txt:'这家酒店的位置很好找，还有免费的停车服务，大堂经理很礼貌，服务很满意，好评。',
      icon:'http://img4.imgtn.bdimg.com/it/u=2931642726,2250852866&fm=26&gp=0.jpg'}, 
    ],
    // latitude: 23.099994,
    // longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: "",
      longitude: "",
    }]
  },

 
  onLoad: function (options) {
    this.loadInfo()
  },
  loadInfo:function(){
    let that = this;
    wx.getLocation({
      type: 'gcj02',  //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude,longitude)

        const markers = [{
          latitude: latitude,
          longitude: longitude,
        }]

        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          markers: markers
        })
      }
    })
  },
    // 返回
  back:function(e){
    wx.navigateBack({
      delta: 1,
    })
  },
  xs:function(){
    let no = this.data.no
    if(no == 1){
      this.setData({
        no:'2'
      })
    }
    if(no == 2){
      this.setData({
        no:'1'
      })
    }
  },
  jumpevaltion:function(){
    wx.navigateTo({
      url: '../detacon/evaluation/evaluation',
    })
  }

})