import { useForm } from '@/hooks/form'
import request from '@/request/request'
import { useMeetingRoomStore } from '@/store/meetingRoomStore'
import Taro, { useRouter } from '@tarojs/taro'
import { useCallback, useEffect, useState } from 'react'

interface FormData {
  date: string
  startTime: string
  endTime: string
  remark: string //备注
}
export function useSetupHook() {
  const { params } = useRouter()
  const { setCurrentOrderItem, currentOrderItem } = useMeetingRoomStore()
  const { setFormValues, formValues, register } = useForm<FormData>()
  const [showCalender, setShowCalender] = useState(false)
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

  function handleShowCalender() {
    setShowCalender(true)
  }
  function handleCloseCalender() {
    setShowCalender(false)
  }
  function handleDateSelected(e) {
    console.log({ e })
  }

  async function handleSubmit() {
    const res = await request.post('/meeting-room-orders', {
      data: {
        ...formValues,
        meeting_room: currentOrderItem?.id,
      },
    })
    if (res?.data) {
      Taro.showToast({
        title: '预约成功',
      })
      Taro.redirectTo({ url: '/pages/order/meetingRoomHistory/index' })
    }
  }
  useEffect(() => {
    console.log({ params })
    if (params.id) {
      getDetailInfo(params.id)
    }
    return () => {}
  }, [getDetailInfo, params])

  return {
    currentOrderItem,
    formValues,
    showCalender,
    register,
    handleShowCalender,
    handleCloseCalender,
    handleDateSelected,
    handleSubmit,
  }
}
