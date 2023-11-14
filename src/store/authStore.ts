export const useAuthStore = defineStore(
  'authStore',
  () => {
    const token = ref('');
    const isLogin = ref(false);

    function SETTIKEN(value: string) {
      token.value = value;
      isLogin.value = true;
    }
    function GETTIKEN() {
      return token.value;
    }
    function getAuthorization() {
      return token.value ? { authorization: `Bearer ${token.value}` } : {};
    }

    function clearStatus() {
      token.value = '';
      isLogin.value = false;
    }

    return {
      SETTIKEN,
      GETTIKEN,
      getAuthorization,
      clearStatus,
      token,
      isLogin,
    };
  },
  {
    persist: {
      // 持久化存储写法
      enabled: true,
    },
  },
);
