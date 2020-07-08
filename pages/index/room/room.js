// pages/index/room/room.js
Page({


  data: {
    list :[
      {id:1,title:'房间数'},
      {id:2,title:'成年人'},
      {id:3,title:'未成年人'}
    ],
    int_1:1,
    int_2:1,
    int_3:1,
  },
  jia_1:function(e){let int = this.data.int_1;
    this.setData({int_1:int-1})
  },
  jian_1:function(e){let int = this.data.int_1;
    this.setData({int_1:int+1})
  },

  jia_2:function(e){let int = this.data.int_2;
    this.setData({int_2:int-1})
  },
  jian_2:function(e){let int = this.data.int_2;
    this.setData({int_2:int+1})
  },

  jia_3:function(e){let int = this.data.int_3;
    this.setData({int_3:int-1})
  },
  jian_3:function(e){let int = this.data.int_3;
    this.setData({int_3:int+1})
  },

  onLoad: function (options) {
    
  },

  jumpinx:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})