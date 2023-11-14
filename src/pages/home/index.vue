<script lang="ts" setup>
import { ref } from "vue";

const currentTabbar = ref(0);

// 导航栏数据
const tabbarData = [
  {
    name: "首页",
    icon: "home",
    activeIcon: "home-fill",
  },
  {
    name: "爱好",
    icon: "like",
    activeIcon: "like-fill",
  },
  {
    name: "积分",
    icon: "shop",
    activeIcon: "shop-fill",
  },
  {
    name: "热谤",
    icon: "fire",
    activeIcon: "fire-fill",
  },
  {
    name: "我的",
    icon: "my-circle",
    activeIcon: "my-circle-fill",
  },
];
</script>

<template>
  <tn-tabbar v-model="currentTabbar" fixed switch-animation>
    <!-- 导航栏 -->
    <tn-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :active-icon="item.activeIcon"
      :text="item.name"
      :bulge="index === 2"
      bulge-bg-color="tn-gradient__cool-6"
    />
  </tn-tabbar>
</template>
