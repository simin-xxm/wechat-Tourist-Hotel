//获取应用实例
const app = getApp()
Page({


  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    listJg:app.data.listJg,
    detali:[
      {id:0,Hotel:'香格里拉大酒店',room:'豪华房间',np:'1',price:'2341',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3762728738,912009344&fm=26&gp=0.jpg'},
      {id:1,Hotel:'半岛酒店',room:'高级套件',np:'2',price:'1234',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2076757970,3096580353&fm=26&gp=0.jpg'},
      {id:2,Hotel:'希尔顿国际大酒店',room:'普通套件',np:'1',price:'941',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2377269718,4046246101&fm=26&gp=0.jpg'},
      {id:3,Hotel:'四季酒店',room:'电竞主题',np:'5',price:'2313',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3428388380,3788880957&fm=26&gp=0.jpg'},
      {id:4,Hotel:'洲际酒店',room:'总统套间',np:'1',price:'8341',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853061600,737800844&fm=26&gp=0.jpg'},
      {id:5,Hotel:'丽思卡尔顿酒店',room:'豪华双间',np:'2',price:'4341',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1200773561,1578686453&fm=26&gp=0.jpg'},
    ],
    hotel:''
  },


  onLoad: function (options) {
    let id = options.id;
    let ids = this.data.detali[id].id;
    // console.log(ids)
    let hotel = this.data.detali[id].Hotel;
    if(ids == id){
      this.setData({
        hotel:hotel
      })
    }
  },

  // 详情 
  jumpx: function(e){
    wx.navigateTo({
      url: '../details/detacon/detacon',
    })
  },
  // 返回上一页
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  } 
})