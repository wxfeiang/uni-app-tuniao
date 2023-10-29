<script lang="ts" setup>
import { http } from "../../utils/request";
let loginFrom = ref({
  username: "admin",
  password: "123456",
});
interface ApiData<T> {
  message?: string;
  code: number;
  status?: "success" | "error";
  data: T;
}

const sublit = async () => {
  console.log("🍣");

  const res = await http.request<ApiData<any>>({
    url: "/employee/login",
    method: "post",
    data: loginFrom.value,
  });
  console.log("🍇", res);
};
</script>

<template>
  <tn-button @click="sublit">提交</tn-button>

  <view class="tn-text-ellipsis-1">
    sv sfvsdfoivhso'difjvopshfviousdf povjs pofvosifnvpo sjf iopvwa'oifhvo aejfv [osanf pi
  </view>
</template>
