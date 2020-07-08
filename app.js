//app.js
App({
  data: {
    umail:'123',
    upwd:'123',
    listJg:[
      {id:1,Hotel:'香格里拉大酒店',location:'海定区，北京',distance:'14',price:'1213',img:'http://img0.imgtn.bdimg.com/it/u=3712520594,980878736&fm=26&gp=0.jpg'},
      {id:2,Hotel:'半岛酒店',location:'白云区，广州',distance:'144',price:'3423',img:'http://img3.imgtn.bdimg.com/it/u=3919019241,2589912946&fm=26&gp=0.jpg'},
      {id:3,Hotel:'希尔顿国际大酒店',location:'浦东区，上海',distance:'14',price:'7545',img:'http://img4.imgtn.bdimg.com/it/u=3549616155,414845953&fm=26&gp=0.jpg'},
      {id:4,Hotel:'四季酒店',location:'天心区，长沙',distance:'114',price:'3254',img:'http://img0.imgtn.bdimg.com/it/u=1376841351,1805025621&fm=26&gp=0.jpg'},
      {id:5,Hotel:'洲际酒店',location:'天河区，广州',distance:'24',price:'5476',img:'http://img0.imgtn.bdimg.com/it/u=2145573808,3684241368&fm=26&gp=0.jpg'},
      {id:6,Hotel:'丽思卡尔顿酒店',location:'龙岗区，深圳',distance:'1004',price:'3345',img:'http://img3.imgtn.bdimg.com/it/u=3506186447,1494407072&fm=26&gp=0.jpg'},
    ]
  },
  onLaunch: function () {
    // console.log(this.data.listJg)
    // 获取设备状态栏高度
    wx.getSystemInfo({
      success: e =>{

        this.globalData.statusBar = e.statusBarHeight; //状态栏高度
        let custom = wx.getMenuButtonBoundingClientRect();//菜单按钮
        this.globalData.custom = custom;
        this.globalData.customBar = custom.bottom + custom.top - e.statusBarHeight;
        //计算得到定义的状态栏高度
        // console.log(custom)
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log("app.js:"+res.userInfo)
              this.globalData.userInfo = res.userInfo
              this.globalData.login = false
              // console.log(this.globalData.tou) 
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      } 
    })
  },
  globalData: {
    userInfo: null,
  }
})