import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'

export default class Articles extends Component {

  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    articles: []
  }

  render() {
    const { articles } = this.props

    return (
      <View className='article at-col'>
        {articles.map((item, index) => (
          <View key={item.id} className='at-row at-row__justify--center'>
            <View className='article-item'>
              <View className='article-top'>
                <View className='at-col article-left '>
                  <View className='at-row'>
                    <Text className='article-title'>{item.title}</Text>
                  </View>
                  <View className='at-row'>
                    <Text className='article-summary'>{item.summary}</Text>
                  </View>
                  <View className='at-row article-extra at-row__justify--between'>
                    <View className='article-extra-left'>
                      <Text className='article-tag'>{item.tag[0]}</Text>
                    </View>
                    <View className='article-extra-right'>
                      <Text className='article-view-num'>
                        {item.collect_num}
                      </Text>
                      <Text className='article-view-font'>游览</Text>
                      <Text className='article-extra-point'>·</Text>
                      <Text className='article-like-num'>{item.like_num}</Text>
                      <Text className='article-extra-like-font'>赞</Text>
                    </View>
                  </View>
                </View>
                <View className='at-col'>
                  <Image className='article-thumb' src={item.thumb} />
                </View>
              </View>
              {index < articles.length - 1 && (
                <View className='article-divider'>
                  <AtDivider
                    lineColor='#E5E5E5'
                    height='10'
                    fontSize='2'
                  />
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    )
  }
}
