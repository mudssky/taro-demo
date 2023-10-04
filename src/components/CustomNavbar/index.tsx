import Taro from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'
import { AtNavBarProps } from 'taro-ui/types/nav-bar'

export default function CustomNavbar(props: AtNavBarProps) {
  const { ...restProps } = props
  const currentInstance = Taro.getCurrentInstance()
  return (
    <AtNavBar
      onClickLeftIcon={() => {
        console.log('left click')
        Taro.navigateBack()
      }}
      color="#000"
      leftIconType="chevron-left"
      title={currentInstance.page?.config?.navigationBarTitleText}
      leftText="返回"
      {...restProps}
    />
  )
}
