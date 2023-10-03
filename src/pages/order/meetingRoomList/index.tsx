import locationPic from '@/assets/svg/location.svg'
import { Image, View } from '@tarojs/components'
import { useSetupHook } from './hooks'

export default function MeetingRoomList() {
  const { meetingRoomList, handleJumpAdd } = useSetupHook()
  return (
    <View className="p-3 bg-gray-100 h-screen">
      {meetingRoomList.map((item) => {
        return (
          <View
            key={item.id}
            className="flex mb-3"
            onClick={() => handleJumpAdd(item)}
          >
            <View className="">
              <Image
                className="h-[200px] w-[200px]"
                src={`${process.env.TARO_APP_BASEURL}${item.attributes.cover.data.attributes.url}`}
                mode="aspectFit"
              ></Image>
            </View>
            <View className="pl-3 text-sm">
              <View>
                <View>{item.attributes.name}</View>
                <Image style="width: 20px;height: 20px;" src={locationPic} />
                {item.attributes.building_num}
                {item.attributes.floor_num}
              </View>
              <View>容纳人数：{item.attributes.capacity}</View>
            </View>
          </View>
        )
      })}
    </View>
  )
}
