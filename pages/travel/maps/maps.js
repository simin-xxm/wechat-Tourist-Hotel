const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    markers: [{
      id: 1,
      latitude: "",
      longitude: "",
    }],
    listss :[
      {id:1,name:'东京金融街',city:'东京Tokyo',price:'2313',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512773390,2706727842&fm=26&gp=0.jpg'},
      {id:2,name:'伦敦金融街',city:'伦敦London',price:'2341',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1732915663,3435337908&fm=26&gp=0.jpg'},
      {id:3,name:'纽约金融街',city:'纽约NewYork',price:'4213',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1774269056,2926827425&fm=26&gp=0.jpg'},
      {id:4,name:'巴黎金融街',city:'巴黎Paris',price:'5236',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1618098514,3783274597&fm=26&gp=0.jpg'}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInfo()
  },

  back:function(){
    wx.navigateBack({
      delta: 1,
    })
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
      // 日期
      jumpcale :function(){
        wx.navigateTo({
          url: '../../index/calendar/calendar',
        })
      },
      // 房间数
      jumpfj:function(){
        wx.navigateTo({
          url: '../../index/room/room',
        }) 
      },


})