import { View } from '@tarojs/components'

interface Props {
  width?: string | number
  height?: string | number
  src: string
  className?: string
}

/**
 * svg图片需要先在配置文件中注册
 * "usingComponents": {
    "svg": "/static/components/svg/svg"
  }
 * @param props
 * @returns
 */
export default function SvgComponent(props: Props) {
  const { width = '100%', height = '100%', src, className } = props

  return (
    <View className={className}>
      <svg style={{ width, height }} viewBox={`0 0 ${width} ${height}`}>
        <use xlinkHref={`/static/svg/${src}.svg#${src}`} />
      </svg>
    </View>
  )
}
