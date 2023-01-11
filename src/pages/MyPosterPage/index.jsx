import UserInfo from '../../components/MyHome/UserInfo';
import UserPoster from '../../components/MyHome/UserPoster';
import Sidebar from '../../components/Sidebar';
import { useRecoilValue } from 'recoil';
import { userLoginState } from '../../recoil/auth';

const MyPosterPage = () => {
  const isLogin = useRecoilValue(userLoginState);

  console.log(isLogin);
  return (
    <>
      <UserInfo />
      <UserPoster />
      <Sidebar />

      {/*  여기서 슬라이드바를 관리하면 작성한글, 내정보수정 페이지로 각각 이동해서
      렌더링되었을때 없어지게 된다.*/}
    </>
  );
};
export default MyPosterPage;
