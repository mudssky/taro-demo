import { MeetingRoomRes } from '@/api/meeting-room'
import request from '@/request/request'
import { useMeetingRoomStore } from '@/store/meetingRoomStore'
import { useEffect, useState } from 'react'
import { PagiData } from 'types/global'

export function useSetupHook() {
  const { setCurrentOrderItem } = useMeetingRoomStore()
  const [meetingRoomList, setMeetingRoomList] = useState<MeetingRoomRes[]>([])
  async function getRoomList() {
    const res = await request.get<PagiData<MeetingRoomRes>>('/meeting-rooms', {
      data: {
        // 'pagination[page]': 1,
        // 'pagination[pageSize]': 10,
        populate: 'cover',
        // populate: { cover: true },
      },
    })
    setMeetingRoomList(res.data)
    // console.log({ res })
  }

  const handleJumpAdd = (item: MeetingRoomRes) => {
    // 可以通过url传参，然后跳转的页面用Taro.getCurrentInstance()从router获取参数
    // 或者，useRouter获取参数
    // 因为太不方便了，也没有类型提示之类的，我还是选择用zustand来管理这个参数

    // zustand也有一个问题，页面刷新不能维持状态，所以h5里面用是有问题的。
    // 最后还是在url里面传id是最合理的
    Taro.navigateTo({
      url: `/pages/order/orderMeetingRoom/index?id=${item.id}`,
    })
  }
  useEffect(() => {
    getRoomList()

    return () => {}
  }, [])

  return {
    meetingRoomList,
    handleJumpAdd,
  }
}
