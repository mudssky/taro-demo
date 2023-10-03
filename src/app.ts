import { useLaunch } from '@tarojs/taro'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { PropsWithChildren } from 'react'
import './app.scss'

// 全局本地化
dayjs.locale('zh-cn')

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
