import UserInfo from '../../components/MyHome/UserInfo';
import UserPoster from '../../components/MyHome/UserPoster';
import Sidebar from '../../components/Sidebar';
import { useRecoilValue } from 'recoil';
import { userLoginState } from '../../recoil/auth';

const MyPosterPage = () => {
  const isLogin = useRecoilValue(userLoginState);

  return (
    <>
      <UserInfo />
      <UserPoster />
      <Sidebar />
    </>
  );
};
export default MyPosterPage;
