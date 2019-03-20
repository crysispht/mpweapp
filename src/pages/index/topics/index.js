import Taro, { Component } from '@tarojs/taro'
import { ScrollView, Image } from '@tarojs/components'
import './index.scss'

export default class Topics extends Component {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    topics: []
  }

  render() {
    const { topics } = this.props
    return (
      <ScrollView scrollLeft='0' scrollX className='topic' scrollWithAnimation>
        {topics.map((item, index) => {
          return <Image className='topic-item' key={index} src={item.thumb} />
        })}
      </ScrollView>
    )
  }
}
