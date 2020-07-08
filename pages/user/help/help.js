const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    list: [
      {id:1,country:'预约支付',sys:''},
      {id:2,country:'我怎么取消预定的房间',sys:'>'},
      {id:3,country:'我们接受什样的付款方式',sys:'>'},
      {id:4,country:'我们如何编辑或者删除付款方式',sys:'>'},
      {id:5,country:'我什么时候需要预定',sys:'>'},
      {id:6,country:'信任和安全',sys:''},
      {id:7,country:'我是顾客有什么安全提示需要注意',sys:'>'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})