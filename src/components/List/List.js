import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './List.less'
// img
import more from '../../asset/images/more.png';
// components


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='List'>
        <View className='person'>
          <View className='headImg'>
            <Image src={this.props.HeadImg}></Image>
          </View>
          <View className='titleName'>
            {this.props.TitleName}
          </View>
          <View className='more'>
            <Image src={more}></Image>
          </View>
        </View>
        <View className='question'>
          {this.props.title}
        </View>
        <View className='answerContent'>
          {this.props.answer}
        </View>
        <View className='answerFooter'>
          <Text>{this.props.good_num} 赞同 </Text>
          <Text>{this.props.comment_num} 评论 </Text>
          <Text>关注问题</Text>
        </View>
      </View>
    )
  }
}

