import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class SwiperBanner extends Component {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    list: []
  }

  render() {
    const { list } = this.props
    return (
      <View className='banner'>
        <Swiper
          className='swiperlist'
          circular
          autoplay
          indicatorDots
          indicatorColor='#FFFFFF'
          indicatorActiveColor='#FAE54B'
        >
          {list.map(item => (
            <SwiperItem
              className='at-row at-row__justify--center'
              key={item.id}
            >
              <Image className='swiperlist-img' src={item.thumb} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
