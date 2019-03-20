import Taro from '@tarojs/taro'
import MP_CONFIG from '../config'

export default {
  getHomeInfo: function() {
    return Taro.request({
      url: MP_CONFIG.API_URL + '/app/home',
      // url: '/api/app/home',
      method: 'GET',
      mode: 'cors',
      // credentials: 'include',
      dataType: 'json'
    })
  },

  getArticles: page => {
    return Taro.request({
      url: MP_CONFIG.API_URL + '/app/home/article/' + page,
      method: 'GET',
      mode: 'cors',
      // credentials: 'include',
      dataType: 'json'
    })
  }
}
