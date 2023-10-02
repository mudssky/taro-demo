export function useSetupHook() {
  const handleJumpPage = () => {
    Taro.navigateTo({
      url: '/pages/order/meetingRoomList/index',
    })
  }
  return {
    handleJumpPage,
  }
}
