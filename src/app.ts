import { useLaunch } from '@tarojs/taro'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { PropsWithChildren } from 'react'
import './app.scss'

// 全局本地化
dayjs.locale('zh-cn')
// 增加解析字符串的dayjs插件
dayjs.extend(customParseFormat)

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
