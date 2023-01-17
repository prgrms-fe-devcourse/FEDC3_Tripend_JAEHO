import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Signin/';
import { getStorage } from '../../utils/storage';

const SigninPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getStorage('Token')) {
      navigate('/main');
    }
  }, []);

  return (
    <>
      <Login />
    </>
  );
};
export default SigninPage;
