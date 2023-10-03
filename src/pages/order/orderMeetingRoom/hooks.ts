import request from '@/request/request'
import { useMeetingRoomStore } from '@/store/meetingRoomStore'
import { useRouter } from '@tarojs/taro'
import { useCallback, useEffect } from 'react'

export function useSetupHook() {
  const { params } = useRouter()
  const { setCurrentOrderItem, currentOrderItem } = useMeetingRoomStore()

  const getDetailInfo = useCallback(
    async function (id: string) {
      const res = await request.get(`/meeting-rooms/${id}`, {
        data: {
          populate: 'cover',
        },
      })
      setCurrentOrderItem(res.data)
    },
    [setCurrentOrderItem],
  )
  useEffect(() => {
    console.log({ params })
    if (params.id) {
      getDetailInfo(params.id)
    }
    return () => {}
  }, [getDetailInfo, params])

  return {
    currentOrderItem,
  }
}
