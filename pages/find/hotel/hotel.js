
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
    ],
    hotel:'',
    city:'',
    distance:'',
    price:'',
    com:'',
    img:'',
  },


  onLoad: function (options) {
    let id = options.id;
    let ids = this.data.booked[id].id;
    let hotel = this.data.booked[id].hotel;
    let city = this.data.booked[id].city;
    let distance = this.data.booked[id].distance;
    let price = this.data.booked[id].price;
    let com = this.data.booked[id].com;
    let img = this.data.booked[id].img;
    if(ids == id){
      this.setData({
        hotel:hotel,
        city:city,
        distance:distance,
        price:price,
        com:com,
        img:img
      })
    }
  },
  // 返回
  return: function(e){
    wx.navigateBack({
      delta: 1,
    })
  }

  
})