<script setup lang="ts">
const { indexList, loadmore, goDetil } = useUser();
onLoad(() => {
  loadmore();
});
const scrolltolower = () => {
  loadmore();
};
</script>
<template>
  <view class="">我的</view>

  <view class="u-page">
    <u-list @scrolltolower="scrolltolower">
      <u-list-item v-for="(item, index) in indexList" :key="index">
        <u-cell :title="`列表长度-${index + 1}`" @click="goDetil(index)">
          <template #icon>
            <u-avatar
              shape="square"
              size="35"
              :src="item.url"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
          </template>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
