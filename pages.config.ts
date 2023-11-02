import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  "easycom": {
    "autoscan": true,
    "custom": {
      "^tn-(.*)-(item|group)$": "@tuniao/tnui-vue3-uniapp/components/$1/src/$1-$2.vue",
      "^tn-(.*)": "@tuniao/tnui-vue3-uniapp/components/$1/src/$1.vue",
    }
  },
  "pages": [
    {
      "path": "pages/index",
    },
    {
      "path": "pages/hi",
    }
  ],
  globalStyle: {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
  tabBar: {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    list: [
      {
        pagePath: 'pages/index',
        text: '首页',
        // iconPath: 'static/tabbar/home.png',
        // selectedIconPath: 'static/tabbar/home_active.png',
      },
      {
        pagePath: 'pages/hi',
        text: 'hi',
        // iconPath: 'static/tabbar/home.png',
        // selectedIconPath: 'static/tabbar/home_active.png',
      }
    ],
  }
})
