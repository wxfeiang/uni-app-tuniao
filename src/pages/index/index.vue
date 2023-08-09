<script setup lang="ts">
const { Login, userInfo, getToken } = useAuth();
</script>
<template>
  <up-button type="primary" text="测试登录" @click="Login"></up-button>
  <view> 用户名 : {{ userInfo.name }} </view>
  <view> 用户ID : {{ userInfo.id }} </view>

  <up-button type="primary" :plain="true" text="测试token" @click="getToken"></up-button>
</template>
