import { Image, View } from '@tarojs/components'

import { useSetupHook } from './hooks'

export default function MeetingRoomList() {
  const { meetingRoomList } = useSetupHook()
  return (
    <View className="p-3 bg-gray-100 h-screen">
      {meetingRoomList.map((item) => {
        return (
          <View key={item.id} className="flex mb-3">
            <View className="w-[300px]">
              <Image
                src={`${process.env.TARO_APP_BASEURL}${item.attributes.cover.data.attributes.url}`}
                mode="aspectFit"
              ></Image>
            </View>
            <View className="pl-3">
              <View>{item.attributes.building_num}</View>
              <View>{item.attributes.building_num}</View>
            </View>
          </View>
        )
      })}
    </View>
  )
}
