import Taro, { useLaunch } from '@tarojs/taro'
import { PropsWithChildren } from 'react'
import './app.scss'

global.Taro = Taro

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
