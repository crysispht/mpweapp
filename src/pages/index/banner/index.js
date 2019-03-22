import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
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
      <View className='at-col at-col__align--center'>
        <View className='home-search-view at-row at-row__justify--center'>
          <View className='home-search at-row__justify--center at-row__align--center'>
            <Text className='at-icon at-icon-search home-search-icon' />
            <Text className='home-search-text'>搜索</Text>
          </View>
        </View>
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
      </View>
    )
  }
}
