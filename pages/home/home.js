// pages/home/home.js
Page({
  data: {
    avatar: '', // 头像图片路径
    username: '',
    memberStatus: '非学员',
    // 轮播图
    images: [
      "/image/cover_1.jpg",
      "/image/cover_2.jpg",
      "/image/cover_3.jpg",
    ]
  },
  onLoad: function (options) {
  },
  getUserInfo: function() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        this.setData({
          avatar: res.userInfo.avatarUrl,
          username: res.userInfo.nickName
        });
      },
      fail: (err) => {
        console.log('获取用户信息失败', err);
      }
    });
  },

  toTestPage: function(e){
    let testId = e.currentTarget.dataset['testid'];
    wx.navigateTo({
      url: '../test/test?testId='+testId
    })
  }
})