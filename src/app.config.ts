export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/register/index',
    'pages/my/index',
    'pages/order/meetingRoomList/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#f00',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath: './assets/tabbar/home.png',
        // selectedIconPath: './assets/tabbar/home-active.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        // iconPath: './assets/tabbar/home.png',
        // selectedIconPath: './assets/tabbar/home-active.png',
      },
    ],
    position: 'bottom',
    custom: false,
  },
})
