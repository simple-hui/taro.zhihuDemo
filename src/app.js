import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'taro知乎demo',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      },{
        pagePath: "pages/discovery/discovery",
        text: "发现",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      }, 
      {
        pagePath: "pages/more/more",
        text: "我的",
        iconPath: "./asset/images/burger.png",
        selectedIconPath: "./asset/images/burger_focus.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
