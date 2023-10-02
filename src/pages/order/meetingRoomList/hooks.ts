import { MeetingRoomRes } from '@/api/meeting-room'
import request from '@/request/request'
import { useEffect, useState } from 'react'
import { PagiData } from 'types/global'

export function useSetupHook() {
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
  useEffect(() => {
    getRoomList()

    return () => {}
  }, [])

  return {
    meetingRoomList,
  }
}
