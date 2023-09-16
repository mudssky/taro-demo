import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className="index">
      <AtButton type="primary">按钮文案</AtButton>
      <View>测试首页</View>
    </View>
  )
}
