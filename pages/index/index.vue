<template>
  <view>
    <navbar isHome />
    <view class="mt130rpx">
      <view class="weui-cell bg-#fff9e6 flex">
        <view class="weui-cell__hd">
          <image src="/static/resource/images/ic_myapp.png" class="block w40rpx h40rpx mr14rpx"></image>
        </view>
        <view class="weui-cell__bd">
          <text class="color-#be9719 font-size-26rpx">点击右上角“添加到我的小程序”，方便下次找到！</text>
        </view>
        <view class="weui-cell__ft">
          <image src="/static/resource/images/modal_closer.png" class="block w30rpx h30rpx"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
const data = ref('动态数组')
const navigateTo = () => {
  uni.navigateTo({
    url: '/pages/search/index',
  })
}
const app = getApp()
onLoad(() => {
  app.globalData.utils.getUserInfo()
})
</script>

<style>
page {
  background-color: #fff;
}
</style>
