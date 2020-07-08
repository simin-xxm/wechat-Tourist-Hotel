//index.js
//获取应用实例
const app = getApp()
let userInfo = app.globalData.userInfo;
Page({
  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    listss :[
      {id:1,city:'东京Tokyo',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512773390,2706727842&fm=26&gp=0.jpg'},
      {id:2,city:'伦敦London',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1732915663,3435337908&fm=26&gp=0.jpg'},
      {id:3,city:'纽约NewYork',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1774269056,2926827425&fm=26&gp=0.jpg'},
      {id:4,city:'巴黎Paris',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1618098514,3783274597&fm=26&gp=0.jpg'}
    ],
    listlv :[
      {id:1,load:'夏威夷Hawaii',img:'http://img5.imgtn.bdimg.com/it/u=2938963400,2670890059&fm=26&gp=0.jpg'},
      {id:2,load:'西班牙Spain',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3449903951,680980719&fm=26&gp=0.jpg'},
      {id:3,load:'米兰Milan',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3901026462,2665639419&fm=26&gp=0.jpg'}
    ],
    listJg:[
      {id:0,Hotel:'香格里拉大酒店',location:'海定区，北京',distance:'14',price:'1213',img:'http://img0.imgtn.bdimg.com/it/u=3712520594,980878736&fm=26&gp=0.jpg'},
      {id:1,Hotel:'半岛酒店',location:'白云区，广州',distance:'144',price:'3423',img:'http://img3.imgtn.bdimg.com/it/u=3919019241,2589912946&fm=26&gp=0.jpg'},
      {id:2,Hotel:'希尔顿国际大酒店',location:'浦东区，上海',distance:'14',price:'7545',img:'http://img4.imgtn.bdimg.com/it/u=3549616155,414845953&fm=26&gp=0.jpg'},
      {id:3,Hotel:'四季酒店',location:'天心区，长沙',distance:'114',price:'3254',img:'http://img0.imgtn.bdimg.com/it/u=1376841351,1805025621&fm=26&gp=0.jpg'},
      {id:4,Hotel:'洲际酒店',location:'天河区，广州',distance:'24',price:'5476',img:'http://img0.imgtn.bdimg.com/it/u=2145573808,3684241368&fm=26&gp=0.jpg'},
      {id:5,Hotel:'丽思卡尔顿酒店',location:'龙岗区，深圳',distance:'1004',price:'3345',img:'http://img3.imgtn.bdimg.com/it/u=3506186447,1494407072&fm=26&gp=0.jpg'},
    ]
  },
 
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    if (app.globalData.userInfo === null) {
      wx.getUserInfo({
        success: function(res) {
          // userInfo = res.detail.userInfo;
          // console.log(res.userInfo.avatarUrl)
          that.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName
          })
        }
      })
    } else {
      that.setData({
        login: false,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName,
      })
    }
    
  },
  // 搜索跳转
  jump_Tiao: function(e){
    wx.navigateTo({
      url: '../index/search/search',
    })
  },
  // 日期
  jumpcale :function(){
    wx.showLoading
    wx.navigateTo({
      url: '../../pages/index/calendar/calendar',
    })
  },
  // 房间数
  jumpfj:function(){
    wx.navigateTo({
      url: '../index/room/room',
    }) 
  },
  // 酒店详情
  jumphotle:function(e){
    let id = e.currentTarget.dataset.id;
    // console.log(id)
    wx.navigateTo({
      url: '../index/details/details?id='+id,
    })
  },
  jumptravel:function(){
    wx.navigateTo({
      url: '../travel/travel',
    })
  }
})
