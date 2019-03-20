import Taro from '@tarojs/taro'

/**
 * Defines the API route we are using.
 */
let api_url = ''
let app_url = ''

switch (process.env.NODE_ENV) {
  case 'development':
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
      api_url = 'http://mp.visitbeijing.com.cn/api'
    } else {
      api_url = '/api/'
    }
    break
  case 'production':
    api_url = 'http://mp.visitbeijing.com.cn/api'
    break
}

const MP_CONFIG = {
  API_URL: api_url,
  APP_URL: app_url
}

export default MP_CONFIG
