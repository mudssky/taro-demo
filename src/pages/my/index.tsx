import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { useSetupHook } from './hooks'

export default function My() {
  const { userInfo } = useSetupHook()

  return (
    <View>
      <View className="flex p-4 bg-slate-200">
        <View className="">
          <AtAvatar circle text="头像占位"></AtAvatar>
        </View>
        <View className="pl-3">
          <View className="flex justify-between">
            <View>用户名：</View>
            <View>{userInfo?.username}</View>
          </View>
          <View className="flex justify-between">
            <View>邮箱：</View>
            <View>{userInfo?.email}</View>
          </View>
        </View>
      </View>
    </View>
  )
}
