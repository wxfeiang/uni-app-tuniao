<script lang="ts" setup>
const { Login, tesToken, loginFrom, rules, authInfo } = useAuth();
const router = useRouter();

function goto() {
  router.push({ name: "Home" });
}
</script>

<template>
  <view class="flex flex-clo w-90% ma mt-50 bg-blue-500">
    <tn-form ref="formRef" :model="loginFrom" :rules="rules">
      <tn-form-item label="用户名" prop="username">
        <tn-input v-model="loginFrom.username" clearable />
      </tn-form-item>
      <tn-form-item label="密码" prop="password">
        <tn-input
          v-model="loginFrom.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </tn-form-item>
    </tn-form>
  </view>

  <tn-button @click="Login">提交</tn-button>

  <tn-button @click="tesToken">测试登录</tn-button>
  <tn-button @click="goto">路由跳转</tn-button>
  登录后响应式数据展示
  {{ authInfo }}
</template>
