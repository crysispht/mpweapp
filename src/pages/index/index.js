import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtLoadMore } from 'taro-ui'
import { getWindowHeight } from '@/utils/style'
import Banner from './banner/index'
import Topics from './topics/index'
import Articles from './articles/index'
import TopLine from './topline/index'
import './index.scss'

@inject('homeStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }

  state = {
    loadMoreStatus: '',
    loadMoreView: false,
    loadMoreAction: true,
    loadHomeInfoStatus: 0,
    articles: [],
    articlePage: 1
  }

  homeStore = {}

  constructor() {
    super(...arguments)

    const { homeStore } = this.props

    this.homeStore = homeStore
  }

  componentWillMount() {
    this.homeStore.loadHomeInfo()
  }

  componentDidMount() {
    this.homeStore.getArticles(1).then(res => {
      if (res.data.code === 200) {
        this.setState({
          articles: res.data.data
        })
        this.loadHomeInfoStatus = 2
      } else {
        console.log(res.data.msg)
        this.loadHomeInfoStatus = 3
      }
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onScrollToLower() {
    if (this.state.loadMoreView === false) {
      this.setState({ loadMoreView: true, loadMoreStatus: 'loading' })
      let articlePage = this.state.articlePage + 1
      this.homeStore
        .getArticles(articlePage)
        .then(res => {
          if (res.data.code === 200) {
            this.setState({
              loadMoreView: false,
              articlePage: articlePage,
              articles: this.state.articles.concat(res.data.data)
            })
          }
        })
        .catch(err => {
          console.log(err)
          Taro.showToast({ title: err, icon: 'none' })
          this.setState({ loadMoreView: false, loadMoreStatus: 'loading' })
        })
    }
  }

  onScroll(e) {
    if (e.detail.scrollTop <= 232) {
      this.setState({ loadMoreAction: true })
    }
    // this.setState({ scrolltop: e.detail.scrollTop })
  }

  // incrementAsync = () => {
  //   const { counterStore } = this.props
  //   counterStore.incrementAsync()
  // }

  render() {
    if (this.props.homeStore.loadHomeInfoStatus !== 2) {
      Taro.showToast({ title: '信息加载中' })
      return <View />
      // return Taro.showToast({ title: '信息加载中' })
    }

    const homeInfo = this.homeStore.homeInfo
    let articles = this.state.articles
    return (
      <View className='home at-col'>
        <ScrollView
          className='at-col at-col__align--center'
          style={{ height: getWindowHeight(false) }}
          scrollY
          scrollWithAnimation
          enableBackToTop
          onScrollToLower={this.onScrollToLower.bind(this)}
          scrollTop='0'
          onScroll={this.onScroll.bind(this)}
        >
          <Banner list={homeInfo.banner} />

          <Topics topics={homeInfo.topic} />

          <TopLine topLine={homeInfo.top_line} />

          <Articles articles={articles} />
          {this.state.loadMoreView && this.state.loadMoreAction ? (
            <AtLoadMore
              className='at-row at-row__align--center loadmore'
              status={this.state.loadMoreStatus}
            />
          ) : null}
        </ScrollView>
      </View>
    )
  }
}

export default Index
