import { login, testToken } from '@/api/login';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

//
interface userInfo {
  name: string;
  id: number;
}

let userInfo = ref(<userInfo>{});
const loginFrom = ref({
  username: 'admin',
  password: '123456',
});
const rules = {
  username: {
    type: 'string',
    required: true,
    message: '请填用户名',
    trigger: ['blur'],
  },
  password: {
    type: 'string',
    required: true,
    message: '请输入密码',
    trigger: ['blur', 'change'],
  },
};

const Login = async () => {
  try {
    // 返回数据的类型
    const { data } = await login(loginFrom.value);
    console.log('🎂[data]:', data);
    authStore.SETTIKEN(data.token);
    userInfo.value = data.data;
    console.log('🍉[userInfo]:', userInfo.value);
  } catch {
    console.log('sdsdc');
  }
};
const getToken = async () => {
  try {
    const config = {
      params: {}, // 提交参数 params  url拼接
      custom: { auth: true, toast: true },
    };
    const data = await testToken(config);
    console.log('🥥[data]:', data);
  } catch (error) {
    console.log('🍲[error]:', error);
  }
};

export default () => {
  return { Login, userInfo, getToken, loginFrom, rules };
};
