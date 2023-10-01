import { useUserStore } from '@/store/userStore'
import { useEffect } from 'react'

export function useSetupHook() {
  const { userInfo, fetchUserInfo } = useUserStore()

  useEffect(() => {
    fetchUserInfo()
    return () => {}
  }, [])

  return { userInfo }
}
