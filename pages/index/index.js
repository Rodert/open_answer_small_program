//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: '/image/wechat.png', // 默认头像
      nickName: '微信用户' // 默认昵称
    },
    hasUserInfo: false,
    canIUseGetUserProfile: true
    // canIUseGetUserProfile: wx.canIUse('getUserProfile')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../home/home'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.getUserInfo(),
        hasUserInfo: true
      })
    } else if (this.data.canIUseGetUserProfile) {
      // 使用 getUserProfile 接口获取用户信息
      // this.getUserProfile()
    }
  },
  getUserProfile: function() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: (err) => {
        console.log('获取用户信息失败', err);
        wx.showModal({
          title: '警告',
          content: '1您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function (res) {
            // 用户没有授权成功，不需要改变 isHide 的值
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.userInfo) {
      // 用户按了允许授权按钮
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    } else {
      // 用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '2您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})
