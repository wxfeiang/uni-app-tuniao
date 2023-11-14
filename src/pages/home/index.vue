<script lang="ts" setup>
const { Login, userInfo, tesToken, loginFrom, rules } = useAuth();
</script>

<template>
  <tn-button @click="Login">提交</tn-button>

  <view class="tn-text-ellipsis-1">
    sv sfvsdfoivhso'difjvopshfviousdf povjs pofvosifnvpo sjf iopvwa'oifhvo aejfv [osanf pi
  </view>

  <tn-button @click="tesToken">测试登录</tn-button>
</template>
