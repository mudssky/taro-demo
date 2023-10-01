import Taro from '@tarojs/taro'
import { GlobalStorage } from './storage'

export function checkLogin() {
  // const userInfo = Taro.getStorageSync('UserInfo')
  // console.log('dedd', GlobalStorage.Taro)
  const userInfo = GlobalStorage.getStorageSync('AUTHTOKEN')

  if (!userInfo) {
    Taro.redirectTo({
      url: '/pages/login/index',
    })
  }
}

export function getAuthToken() {
  return `Bearer ${GlobalStorage.getStorageSync('AUTHTOKEN')}`
}
