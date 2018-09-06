import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './index.less'
// img
import search from '../../asset/images/search.png'
import write from '../../asset/images/write.png'
// components
import List from '../../components/List/List.js';


const domFix = (listData) => {
  return listData.map((item,index)=>{
    return <List 
      key={index}
      HeadImg={item.feed_source_img}
      TitleName={item.feed_source_name}
      title={item.question}
      answer={item.answer_ctnt}
      good_num={item.good_num}
      comment_num={item.comment_num}></List>
  })
}


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      navTav: ['关注','推荐','热榜','视频'],
      currentNav: 0,
      left: 0,
      loading: true,
      listData: [],
    }
  }

  tabs = (index,e)=> {
    // 阻止事件冒泡
    e.stopPropagation();
    // 计算总宽度
    let leftNum = (e.view.outerWidth / 4) * index;
    this.setState({
      left: leftNum,
      currentNav: index
    })

  }
  // 上啦刷新
  getList = () => {
    if (this.state.loading) {
      return
    }
    this.setState({
      loading: true
    })
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(resp => {
      Taro.hideLoading()
      if (resp.data.success) {
        let arr = [...resp.data.data,...this.state.listData]
        this.setState({
          loading:false,
          listData:arr
        })
      }
    })
  }
  // 下啦加载
  moreList = () => {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(resp => {
      Taro.hideLoading()
      if (resp.data.success) {
        this.setState({
          listData: this.state.listData.concat(resp.data.data),
          loading: false
        })
      }
    })
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.showLoading({ title: '加载中' })
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(resp => {
      Taro.hideLoading()
      if (resp.data.success) {
        this.setState({
          loading: false,
          listData: resp.data.data
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const tabLeft = {
      left: this.state.left
    }

    let listData = domFix(this.state.listData);

    return (
      <View className='index'>
        <View className='title'>
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
            <View className='line' style={tabLeft}></View>
          </View>
        </View>
    

        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='10'
          upperThreshold='10'
          className='scrollContent'
          style='height:600px'
          onScrolltoupper={this.getList}
          onScrolltolower={this.moreList}>
          <View>
          {
            this.state.currentNav === 0 ? listData : <View>123</View>
          }
          </View>
        </ScrollView>

      </View>
    )
  }
}

