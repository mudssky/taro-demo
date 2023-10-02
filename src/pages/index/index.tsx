import { checkLogin } from '@/global/user'
import { useUserStore } from '@/store/userStore'
import { range } from '@mudssky/jsutils'
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useSetupHook } from './hooks'
import './index.scss'

export default function Index() {
  const { handleJumpPage } = useSetupHook()
  const { userInfo, fetchUserInfo } = useUserStore()
  useLoad(() => {
    checkLogin()
    fetchUserInfo()

    console.log('Page loaded.')
  })

  return (
    <View className="index bg-gray-100 px-2">
      <View className="flex justify-end">欢迎您，{userInfo?.username}用户</View>
      <View className="grid grid-cols-4 gap-1 bg-white mt-2 rounded-lg p-2 text-sm">
        <View className="entry-item" onClick={handleJumpPage}>
          会议室预约
        </View>
        {range(1, 30).map((item) => {
          return (
            <View className="entry-item" key={item}>
              预约项目{item}
            </View>
          )
        })}
      </View>
    </View>
  )
}
