import { AtButton } from "taro-ui";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <AtButton type="primary">按钮文案</AtButton>
      <View className="text-[#acc855] text-[100px]">Hello world!</View>
      <View className="space-y-[1.6rem]">
        <View className="w-[300rpx] text-black text-opacity-[0.19]">
          w-[300rpx] text-black text-opacity-[0.19]
        </View>
        <View className="min-w-[300rpx] max-h-[100px] text-[20px] leading-[0.9]">
          min-w-[300rpx] max-h-[100px] text-[20px] leading-[0.9]
        </View>
        <View className="max-w-[300rpx] min-h-[100px] text-[#dddddd]">
          max-w-[300rpx] min-h-[100px] text-[#dddddd]
        </View>
        <View className="flex items-center justify-center h-[100px] w-[100px] rounded-[40px] bg-[#123456] bg-opacity-[0.54] text-[#ffffff]">
          Hello
        </View>
        <View className="border-[50px] border-[#098765] border-solid border-opacity-[0.44]">
          border-[10px] border-[#098765] border-solid border-opacity-[0.44]
        </View>
        <View className="grid grid-cols-3 divide-x-[10px] divide-[#010101] divide-solid">
          <View>1</View>
          <View>2</View>
          <View>3</View>
        </View>
      </View>
    </View>
  );
}
