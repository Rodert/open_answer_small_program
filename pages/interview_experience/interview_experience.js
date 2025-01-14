// pages/interview_experience/interview_experience.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toTestPage: function(e){
    let testId = e.currentTarget.dataset['testid'];
    wx.navigateTo({
      url: '../test/test?testId='+testId
    })
  }
})