// pages/organization/organization.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "",
    textareaValue: "",
  },

  inputCom(e){
    this.setData({
        inputValue: e.detail.value
    })
    console.log(this.data.inputValue);
  },

  textareaCom(e){
    this.setData({
        textareaValue: e.detail.value
    })
    console.log(this.data.textareaValue);
  },

  gotoInvitation(){
    if(this.data.inputValue.trim().length == 0){
      this.data.inputValue = '不写完作业不睡觉局'
    }else{
      // console.log(this.data.inputValue);
    }
    if(this.data.textareaValue.trim().length == 0){
      this.data.textareaValue = '8点起床，学习2小时'
    }else{
      // console.log(this.data.textareaValue);
    }

    wx.setStorage({
      key: 'name',
      data: this.data.inputValue
    })

    wx.setStorage({
      key: 'task',
      data: this.data.textareaValue
    })

    wx.navigateTo({
      url: "../invitation/invitation"
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