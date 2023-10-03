import { MeetingRoomRes } from '@/api/meeting-room'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BearState {
  // 当前正在预约的项目，选择会议室列表跳转时设置
  currentOrderItem?: MeetingRoomRes
  setCurrentOrderItem: (currentOrderItem?: MeetingRoomRes) => void
}

const useMeetingRoomStore = create<BearState>()(
  devtools((set) => ({
    currentOrderItem: undefined,
    setCurrentOrderItem: (currentOrderItem) => {
      set({ currentOrderItem })
    },
  })),
)
export { useMeetingRoomStore }
