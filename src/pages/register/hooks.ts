import { GlobalStorage } from '@/global/storage'
import { useForm } from '@/hooks/form'
import request from '@/request/request'

interface FormData {
  username: string
  email: string
  password: string
}

export function useSetupHook() {
  const { formValues, register } = useForm<FormData>()

  const handleLoginSubmit = async () => {
    console.log('detail', formValues)
    const res = await request.post('/auth/local/register', {
      ...formValues,
    })

    console.log({ res })
    GlobalStorage.setStorageSync('USERINFO', res.user)
    GlobalStorage.setStorageSync('AUTHTOKEN', res.jwt)
    Taro.switchTab({
      url: '/pages/index/index',
    })
  }
  return {
    register,
    handleLoginSubmit,
  }
}
