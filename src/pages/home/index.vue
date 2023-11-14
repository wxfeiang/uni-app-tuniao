<script lang="ts" setup>
const { Login, userInfo, tesToken, loginFrom, rules } = useAuth();
const router = useRouter();

//FIX: 只能在 vue 中使用路由插件
function goto() {
  router.push({ name: "test" });
}
</script>

<template>
  <tn-button @click="Login">提交</tn-button>

  <view class="tn-text-ellipsis-1">
    sv sfvsdfoivhso'difjvopshfviousdf povjs pofvosifnvpo sjf iopvwa'oifhvo aejfv [osanf pi
  </view>

  <tn-button @click="tesToken">测试登录</tn-button>
  <tn-button @click="goto">路由跳转</tn-button>
</template>
