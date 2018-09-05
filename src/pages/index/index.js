import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import search from '../../asset/images/search.png'
import write from '../../asset/images/write.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      navTav: ['关注','推荐','热榜','视频'],
      currentNav: 0,
    }
  }

  tabs(index,e) {
    console.log(index);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='searchContent'>
          <View className='searchForm'>
            <Image src={search}></Image>卫龙辣条食品抽检不合格
          </View>
          <View className='seachBtn'>
            <Image src={write}></Image>提问
          </View>
        </View>
        <View className='tabViewTitle'>
          {
            this.state.navTav.map((item,index)=>{
              return (
                <View className={ this.state.currentNav === index ? 'tabTitle active':'tabTitle' } key={item} onClick={this.tabs.bind(this,index)}>{item}</View>
                )
            })
          }
        </View>
      </View>
    )
  }
}

