import { getStorage } from '../utils/storage';
import { TOKEN } from '../utils/auth/constant';
import { useRecoilState } from 'recoil';
import { userLoginState } from '../recoil/auth';
import { getUser } from '../apis/auth';

const useRefreshToken = () => {
  const token = getStorage(TOKEN);
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);

  const refresh = async () => {
    const getLoginToken = await getUser();
    if (getLoginToken.data) {
      console.log(getLoginToken.data);
      return getLoginToken.data;
    }
  };

  return refresh;
};
export default useRefreshToken;
