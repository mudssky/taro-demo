import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtForm, AtInput } from 'taro-ui'
import { useSetupHook } from './hooks'

export default function Login() {
  const { register, handleLoginSubmit } = useSetupHook()

  return (
    <View className="h-screen flex items-center">
      <View className="px-3">
        <View className="flex justify-center">用户登录</View>
        <AtForm onSubmit={handleLoginSubmit}>
          <AtInput
            required
            title="用户名"
            type="text"
            placeholder="请输入邮箱或用户名"
            {...register('identifier')}
          />
          <AtInput
            required
            title="密码"
            type="password"
            placeholder="请输入密码"
            {...register('password')}
          />
          <AtButton type="primary" formType="submit" circle>
            登录
          </AtButton>
        </AtForm>
        <View
          className="flex justify-center mt-4 underline text-blue-600"
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/register/index',
            })
          }}
        >
          没有账号，前往注册
        </View>
      </View>
    </View>
  )
}
