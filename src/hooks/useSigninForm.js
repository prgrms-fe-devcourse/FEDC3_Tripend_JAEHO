import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { postUserLogin } from '../apis/auth';
import { userLoginState } from '../recoil/authState';

export const useSigninForm = () => {
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(userLoginState);
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

      if (res.status === 200) {
        setLogin(true);
        navigate('/main');
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
