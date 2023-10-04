import locationPic from '@/assets/svg/location.svg'
import rightPic from '@/assets/svg/right.svg'
import CustomNavbar from '@/components/CustomNavbar'
import { Image, Text, View } from '@tarojs/components'
import { useSetupHook } from './hooks'

export default function MeetingRoomList() {
  const { meetingRoomList, handleJumpAdd, handleJumpHistory } = useSetupHook()

  return (
    <View className=" bg-gray-100 h-screen">
      {process.env.TARO_ENV === 'h5' && <CustomNavbar></CustomNavbar>}
      <View className="flex justify-end pr-4 items-center shadow-sm mt-1 bg-white p-2">
        <View onClick={handleJumpHistory}>
          <Text>预约历史记录</Text>
          <Image className="w-[40px] h-[40px]" src={rightPic} />
        </View>
      </View>
      <View className="p-3">
        {meetingRoomList.map((item) => {
          return (
            <View
              key={item.id}
              className="flex mb-3 shadow-md bg-white"
              onClick={() => handleJumpAdd(item)}
            >
              <View className="">
                <Image
                  className="h-[200px] w-[200px]"
                  src={`${process.env.TARO_APP_BASEURL}${item.attributes.cover.data.attributes.url}`}
                  mode="aspectFill"
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
    </View>
  )
}
