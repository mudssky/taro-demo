import locationPic from '@/assets/svg/location.svg'
import rightPic from '@/assets/svg/right.svg'
import CustomNavbar from '@/components/CustomNavbar'
import { Image, Picker, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import { omit } from 'lodash-es'
import {
  AtButton,
  AtCalendar,
  AtDivider,
  AtFloatLayout,
  AtForm,
  AtInput,
  AtList,
  AtListItem,
  AtTextarea,
} from 'taro-ui'
import { useSetupHook } from './hooks'

export default function OrderMeetingRoom() {
  const {
    currentOrderItem,
    showCalender,
    formValues,
    register,
    handleShowCalender,
    handleCloseCalender,
    handleSubmit,
  } = useSetupHook()

  return (
    <View>
      {process.env.TARO_ENV === 'h5' && <CustomNavbar></CustomNavbar>}
      <View className="w-full">
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
      <AtForm className="pb-16">
        <View className="flex items-center justify-between pr-3">
          <AtInput
            required
            title="日期选择"
            type="text"
            placeholder="请选择"
            editable={false}
            {...omit(register('date'), 'onChange')}
          ></AtInput>
          <Image
            className="w-[40px] h-[40px]"
            src={rightPic}
            onClick={handleShowCalender}
          />
        </View>
        <Picker
          mode="time"
          value={formValues?.startTime ?? ''}
          onChange={(e) => {
            if (formValues.endTime) {
              if (
                !dayjs(e.detail.value, 'HH:mm').isBefore(
                  dayjs(formValues.endTime, 'HH:mm'),
                )
              ) {
                Taro.showToast({
                  title: '开始时间不能大于结束时间',
                })
                return
              }
            }

            register('startTime').onChange(e.detail.value)
          }}
        >
          <AtList>
            <AtListItem
              title="请选择开始时间"
              extraText={formValues?.startTime ?? ''}
            />
          </AtList>
        </Picker>
        <Picker
          mode="time"
          value={formValues?.endTime ?? ''}
          onChange={(e) => {
            if (formValues.startTime) {
              console.log({ start: formValues.startTime, end: e.detail.value })

              const startDay = dayjs(formValues.startTime, 'HH:mm', 'en')
              const endDay = dayjs(e.detail.value, 'HH:mm', 'en')
              // console.log({ startDay, endDay })
              console.log({ start: startDay.format(), end: endDay.format() })

              if (!startDay.isBefore(endDay)) {
                Taro.showToast({
                  title: '开始时间不能大于结束时间',
                })
                return
              }
            }

            register('endTime').onChange(e.detail.value)
          }}
        >
          <AtList>
            <AtListItem
              title="请选择结束时间"
              extraText={formValues?.endTime ?? ''}
            />
          </AtList>
        </Picker>
        <AtTextarea
          count
          value={formValues?.remark ?? ''}
          {...omit(register('remark'), 'value')}
          maxLength={200}
          placeholder="请输入备注"
        />
      </AtForm>
      <AtFloatLayout isOpened={showCalender} onClose={handleCloseCalender}>
        <AtCalendar
          onSelectDate={(e) => {
            register('date').onChange(e.value.start)
          }}
        />
      </AtFloatLayout>
      <View className="fixed bottom-0 left-0 w-full flex justify-center">
        <View className="w-11/12">
          <AtButton type="primary" circle onClick={handleSubmit}>
            提交
          </AtButton>
        </View>
      </View>
    </View>
  )
}
