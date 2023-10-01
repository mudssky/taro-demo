import { UserMeRes } from '@/api/users'
import { GlobalStorage } from '@/global/storage'
import request from '@/request/request'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  userInfo?: UserMeRes
  setUserInfo: (userInfo: UserMeRes) => void
  fetchUserInfo: () => Promise<void>
}

const useUserStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        userInfo: undefined,
        setUserInfo: (userInfo: UserMeRes) =>
          set(() => ({ userInfo: userInfo })),
        fetchUserInfo: async () => {
          const res = await request.get<UserMeRes>('/users/me')
          GlobalStorage.setStorageSync('USERINFO', res)
          set({ userInfo: res })
        },
      }),
      {
        name: 'userInfo-storage',
      },
    ),
  ),
)
export { useUserStore }
