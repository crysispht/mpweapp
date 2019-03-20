import { observable } from 'mobx'
import HomeAPI from '../api/home'

const homeStore = observable({
  homeInfo: [],
  loadHomeInfoStatus: 0,
  articles: [
    {
      title_short: '',
      thumb: '',
      keyword: [],
      title: '',
      summary: '',
      tag: [],
      editor: '',
      id: '',
      time_publish: '0',
      like_num: '0',
      share_num: '0',
      collect_num: '0',
      article_url: ''
    }
  ],
  loadHomeInfo(data = null) {
    this.loadHomeInfoStatus = 1
    HomeAPI.getHomeInfo()
      .then(res => {
        if (res.data.code === 200) {
          this.homeInfo = res.data.data
          this.loadHomeInfoStatus = 2
        } else {
          console.log(res.data.msg)
          this.loadHomeInfoStatus = 3
        }
      })
      .catch(err => {
        console.log(err)
        this.loadHomeInfoStatus = 3
      })
  },

  getHomeInfo() {
    return HomeAPI.getHomeInfo()
  },

  getArticles(page = 1) {
    return HomeAPI.getArticles(page)
  }
})
export default homeStore
