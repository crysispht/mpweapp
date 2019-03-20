import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import top_line_left from '@/assets/home/top_line_image.png'

export default class TopLine extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    topLine: []
  }

  render() {
    const { topLine } = this.props

    let top_line = topLine.slice(0, 2).map((item, index) => {
      let tips = ''
      if (item.tag.indexOf('最新')) {
        tips = '最新'
      } else {
        tips = '热文'
      }
      return (
        <View key={index} className='top_line_notice_msg'>
          <Text className='top_line_notice_msg_tips'>{tips}</Text>
          <Text className='top_line_notice_msg_content'>{item.summary}</Text>
        </View>
      )
    })

    return (
      <View className='top_line at-row at-row__align-content--start'>
        <Image className='top_line_left' mode='aspectFit' src={top_line_left} />
        <View className='top_line_notice'>{top_line}</View>
      </View>
    )
  }
}
