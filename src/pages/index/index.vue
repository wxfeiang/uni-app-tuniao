<script setup lang="ts">
const http = uni.$u.http;
console.log("🥜[http]:", http);

import { useCounterStore } from "@/stores/counter";

const a = ref("afffff");
const counter = useCounterStore();
counter.count++;
// counter.$patch({ count: counter.count + 1 });
// 或使用 action 代替

const add = () => {
  counter.increment();
};

const list = ref([
  {
    text: "点赞",
    color: "blue",
    fontSize: 28,
  },
  {
    text: "分享",
  },
  {
    text: "评论",
  },
]);

const show = ref(true);
</script>
<template>
  {{ a }}=========={{ list }}
  <view type="primary" @click="add">操作pinia</view>
  <!-- 直接从 store 中访问 state -->
  <view>Current Count: {{ counter.count }}</view>
  <u-icon name="photo"></u-icon>
  <u-action-sheet :list="list" v-model="show"></u-action-sheet>
  <u-button text="月落"></u-button>
  <up-button type="primary" text="确定"></up-button>
  <up-button type="primary" :plain="true" text="镂空"></up-button>
  <up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
  <up-button type="primary" :disabled="show" text="禁用"></up-button>
  <up-button type="primary" loading loadingText="加载中"></up-button>
  <up-button type="primary" icon="map" text="图标按钮"></up-button>
  <up-button type="primary" shape="circle" text="按钮形状"></up-button>
  <up-button
    text="渐变色按钮"
    color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
  ></up-button>
  <up-button type="primary" size="small" text="大小尺寸"></up-button>
</template>
