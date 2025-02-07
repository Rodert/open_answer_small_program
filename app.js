//app.js
// 导入数据
var jsonList = require('data/json.js'); 

App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
      }
    })
  },
  globalData: {
    questionList: jsonList.questionList,  // 拿到答题数据
    userInfo: null
  }
})