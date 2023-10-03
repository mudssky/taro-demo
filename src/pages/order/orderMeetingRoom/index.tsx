import locationPic from '@/assets/svg/location.svg'
import { Image, View } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import { useSetupHook } from './hooks'

export default function OrderMeetingRoom() {
  const { currentOrderItem } = useSetupHook()

  return (
    <View>
      <View>
        <Image
          className="h-[500px] w-full"
          src={`${process.env.TARO_APP_BASEURL}${currentOrderItem?.attributes?.cover.data.attributes.url}`}
          mode="aspectFill"
        ></Image>
      </View>
      <View className="pl-3 text-sm">
        <View>{currentOrderItem?.attributes?.name}</View>
        <View>
          <Image style="width: 20px;height: 20px;" src={locationPic} />
          {currentOrderItem?.attributes?.building_num}
          {currentOrderItem?.attributes?.floor_num}
        </View>
        <View>容纳人数：{currentOrderItem?.attributes?.capacity}</View>
      </View>
      <AtDivider content="分割线" />
    </View>
  )
}
