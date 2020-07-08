const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    booked: [
      {id:0,hotel:'半岛酒店',city:'巴塞罗那，西班牙',distance:'123',price:'2183',com:'89330',img:'http://img4.imgtn.bdimg.com/it/u=185998291,1320812511&fm=15&gp=0.jpg'},
      {id:1,hotel:'宝格丽大酒店',city:'休斯顿，美国',distance:'2342',price:'2134',com:'3445',img:'http://img3.imgtn.bdimg.com/it/u=2095519369,3191134008&fm=26&gp=0.jpg'},
      {id:2,hotel:'四季酒店',city:'曼谷，泰国',distance:'4324',price:'5313',com:'23446',img:'http://img3.imgtn.bdimg.com/it/u=1817334189,1719946548&fm=26&gp=0.jpg'},
      {id:3,hotel:'希尔顿大酒店',city:'巴黎，法国',distance:'422',price:'4356',com:'34245',img:'http://img3.imgtn.bdimg.com/it/u=3654874345,3042176724&fm=15&gp=0.jpg'},
      {id:4,hotel:'香格里拉大酒店',city:'柏林，德国',distance:'1235',price:'1235',com:'54445',img:'http://img4.imgtn.bdimg.com/it/u=2722148109,4127490323&fm=26&gp=0.jpg'},
    ]
  },

  
  onLoad: function (options) {

  },
  Jjump_hotel: function(e){
    let id = e.currentTarget.dataset.id;
    // console.log(id)
    wx.navigateTo({
      url: '../find/hotel/hotel?id='+id
    })
  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
    // 日期
    jumpcale :function(){
      wx.navigateTo({
        url: '../index/calendar/calendar',
      })
    },
    // 房间数
    jumpfj:function(){
      wx.navigateTo({
        url: '../index/room/room',
      }) 
    },
    // 地图
    jumpmap:function(){
      wx.navigateTo({
        url: '../travel/maps/maps',
      })
    },


})