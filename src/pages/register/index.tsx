import { View } from '@tarojs/components'
import { AtButton, AtForm, AtInput } from 'taro-ui'
import { useSetupHook } from './hooks'

export default function Register() {
  const { register, handleLoginSubmit } = useSetupHook()
  return (
    <View className="h-screen flex items-center px-3">
      <View>
        <View className="flex justify-center p-3">注册账号</View>
        <AtForm onSubmit={handleLoginSubmit}>
          <AtInput
            required
            title="用户名"
            type="text"
            placeholder="请输入用户名"
            {...register('username')}
          />
          <AtInput
            required
            title="邮箱"
            type="text"
            placeholder="请输入邮箱"
            {...register('email')}
          />
          <AtInput
            required
            title="密码"
            type="password"
            placeholder="请输入密码"
            {...register('password')}
          />
          <AtButton type="primary" formType="submit" circle>
            注册
          </AtButton>
        </AtForm>
      </View>
    </View>
  )
}
