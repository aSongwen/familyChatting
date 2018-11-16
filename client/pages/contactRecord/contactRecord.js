//contactRecord.js

Page({
  data:{
    contact:[
      {
        avatar:'../../icon/sel_my.png',
        nickname:'baba',
        msg:'1111111'
      }, {
        avatar:'../../icon/sel_my.png',
        nickname:'baba',
        msg:'1111111'
      }
    ]
  },
  // 点击进入聊天界面
  chatPage() {
    wx.navigateTo({
      url: 'chatting?id=1'
    })
  }
})