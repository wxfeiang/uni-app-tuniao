<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const { postMenu } = useAuth();

const a = ref("afffff");
const counter = useCounterStore();
counter.count++;

const params = reactive({
  username: "supadmin",
  password: "12345677e",
});
</script>
<template>
  <up-button type="primary" text="测试登录" @click="postMenu(params)"></up-button>
</template>
