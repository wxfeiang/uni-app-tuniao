<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const { postMenu, test } = useAuth();

const counter = useCounterStore();
counter.count++;
</script>
<template>
  <up-button type="primary" text="测试登录" @click="postMenu"></up-button>
  {{ test }}
</template>
