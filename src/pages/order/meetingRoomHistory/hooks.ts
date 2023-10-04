import { MeetingRoomRecord } from '@/api/meeting-room'
import { PagiResponseType } from '@/api/type'
import request from '@/request/request'
import qs from 'qs'
import { useEffect, useState } from 'react'

export function useSetupHook() {
  const [historyList, setHistoryList] = useState<MeetingRoomRecord[]>([])
  const getHistoryList = async () => {
    const query = qs.stringify(
      {
        populate: {
          meeting_room: {
            populate: ['cover'],
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    )
    const res = await request.get<PagiResponseType<MeetingRoomRecord>>(
      `/meeting-room-orders?${query}`,
    )
    setHistoryList(res.data)
    console.log({ res })
  }
  useEffect(() => {
    getHistoryList()
    return () => {}
  }, [])

  return { historyList }
}
