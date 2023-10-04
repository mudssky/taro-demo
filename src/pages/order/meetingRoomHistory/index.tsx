import CustomNavbar from '@/components/CustomNavbar'
import { View } from '@tarojs/components'
import { useSetupHook } from './hooks'

export default function MeetingRoomHistroy() {
  useSetupHook()
  return (
    <View>
      {process.env.TARO_ENV === 'h5' && <CustomNavbar></CustomNavbar>}
    </View>
  )
}
