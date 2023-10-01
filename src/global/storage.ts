import { TaroStorage } from '@mudssky/jsutils'

import {
  clearStorageSync,
  getStorageInfoSync,
  getStorageSync,
  removeStorageSync,
  setStorageSync,
} from '@tarojs/taro'

export type StorageKey = 'USERINFO' | 'AUTHTOKEN'

export const GlobalStorage = new TaroStorage<StorageKey>({
  getStorageSync,
  setStorageSync,
  clearStorageSync,
  removeStorageSync,
  getStorageInfoSync,
})
