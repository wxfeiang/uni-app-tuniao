<script setup lang="ts">
const a = ref("a");
import { useCounterStore } from "@/stores/counter";
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
  {{ a }}==========
  <view type="primary" @click="add">操作pinia</view>
  <!-- 直接从 store 中访问 state -->
  <view>Current Count: {{ counter.count }}</view>
  222
  <u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>
