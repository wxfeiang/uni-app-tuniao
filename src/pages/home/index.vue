<script lang="ts" setup>
const { Login, userInfo, getToken, loginFrom, rules } = useAuth();
</script>

<template>
  <tn-button @click="Login">登陆</tn-button>
  <tn-button @click="getToken">测试</tn-button>
  <view class="tn-text-ellipsis-1">
    sv sfvsdfoivhso'difjvopshfviousdf povjs pofvosifnvpo sjf iopvwa'oifhvo aejfv [osanf pi
  </view>
</template>
