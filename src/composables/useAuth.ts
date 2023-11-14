import { router } from '@/router'; // js文件使用方法
import { login, testToken } from '@/services/api/auth';
import { useAuthStore } from '@/store/authStore';
const authStore = useAuthStore();
//
import { useRequest } from 'alova';

interface userInfo {
  name: string;
  id: number;
}

let userInfo = ref(<userInfo>{});
const loginFrom = reactive({
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
const { send: sendLogin } = useRequest(login(loginFrom), {
  immediate: false,
});

const Login = async () => {
  sendLogin().then((res: any) => {
    authStore.SETTIKEN(res.token);
    router.push({ name: 'test' });
  });
};
const { send: tesToken } = useRequest(testToken, {
  immediate: false,
});
export default () => {
  return { Login, userInfo, tesToken, loginFrom, rules };
};
