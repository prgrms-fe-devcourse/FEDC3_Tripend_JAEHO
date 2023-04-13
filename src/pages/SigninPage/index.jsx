import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage } from '../../utils/storage';
import Signin from '../../components/Auth/Signin';

const SigninPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getStorage('Token')) {
      navigate('/main');
    }
  }, []);

  return (
    <>
      <Signin />
    </>
  );
};
export default SigninPage;
