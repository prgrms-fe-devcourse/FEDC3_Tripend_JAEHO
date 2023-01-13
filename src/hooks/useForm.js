import { useCallback, useState } from 'react';
import { postUserLogin } from '../apis/auth';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userLoginState } from '../recoil/auth';

export const useForm = () => {
  const naviaget = useNavigate();
  const [isLogin, setLogin] = useRecoilState(userLoginState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setLoading] = useState(false);

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postUserLogin(email, password);

      const { token } = res.data;

      if (res.status === 200) {
        setLogin(true);
        naviaget('/main');
      }
    } catch (e) {
      setLoading(true);
      throw new Error('로그인 실패');
    }
  };

  return {
    email,
    password,
    handleEmail,
    handlePassword,
    isLoading,
    handleSubmit,
  };
};
