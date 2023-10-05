import CustomNavbar from '@/components/CustomNavbar'
import { Text, View } from '@tarojs/components'
import dayjs from 'dayjs'
import { useSetupHook } from './hooks'

export default function MeetingRoomHistroy() {
  const { historyList } = useSetupHook()
  return (
    <View>
      {process.env.TARO_ENV === 'h5' && <CustomNavbar></CustomNavbar>}
      <View>
        {historyList.map((item) => {
          return (
            <View
              key={item.id}
              className="m-2 p-2 text-sm border-2 border-gray-300 border-solid rounded-md"
            >
              <View className="flex justify-between">
                <Text>会议室名称:</Text>
                <Text>
                  {item?.attributes?.meeting_room?.data?.attributes?.name}
                </Text>
              </View>
              <View className="flex justify-between">
                <Text>开始时间:</Text>
                <Text>
                  {`${item?.attributes?.date} ${item?.attributes?.startTime}`}
                </Text>
              </View>
              <View className="flex justify-between">
                <Text>结束时间:</Text>
                <Text>
                  {`${item?.attributes?.date} ${item?.attributes?.endTime}`}
                </Text>
              </View>
              <View className="flex justify-between">
                <Text>位置:</Text>
                <Text>
                  {`${item?.attributes?.meeting_room?.data?.attributes?.building_num} ${item?.attributes?.meeting_room?.data?.attributes?.floor_num}`}
                </Text>
              </View>
              <View className="flex justify-between">
                <Text>备注:</Text>
                <Text>{`${item?.attributes?.remark}`}</Text>
              </View>
              <View className="flex justify-between">
                <Text>创建时间:</Text>
                <Text>{`${dayjs(item?.attributes?.createdAt).format(
                  'YYYY年M月D日 H时m分s秒',
                )}`}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
