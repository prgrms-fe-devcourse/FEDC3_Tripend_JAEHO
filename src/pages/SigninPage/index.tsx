import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Signin from '@/components/Auth/Signin';
import { getStorage } from '@/utils/storage';

const SigninPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getStorage('Token')) {
      navigate('/main');
    }
  }, [navigate]);

  return <Signin />;
};
export default SigninPage;
