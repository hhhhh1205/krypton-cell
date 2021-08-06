// pages/learningBureau.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toggle: true,
    peopleList:[
      {
        imgUrl: "../../images/1.png",
        time: "11:30",
        name: "鸡汁大蘑菇"
      },
      {
        imgUrl: "../../images/2.png",
        time: "11:26",
        name: "无敌小旋风"
      },
      {
        imgUrl: "../../images/3.png",
        time: "11:17",
        name: "姜汁拌大葱"
      },
      {
        imgUrl: "../../images/4.png",
        time: "11:09",
        name: "超级赛亚人"
      },
    ]
  },

  changeToggle(){
    this.setData({
      toggle: !this.data.toggle,
    })
  },

  gotoStudyRoom(){
    wx.navigateTo({
      url: "../studyRoom/studyRoom"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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