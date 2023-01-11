import { getUser } from '../../apis/auth';
import { useEffect, useState } from 'react';

const UserInfo = () => {
  // [x] 사용자는 내 정보에서 이름, 이메일을 확인 할 수 있다.
  // [x] 슬라이드바 컴포넌트 만들고 내 정보 수정 , 작성한 글 보기
  // [x] 내 정보 수정에서 비밀번호 디자인 입히기
  // [x] fullName split 안되는 문제 해결하기
  // [x] 슬라이드바 비밀번호 변경 옆에 두기
  const [getLoginData, setLoginData] = useState({});
  const [name, setName] = useState('');

  const getUserData = async () => {
    const getLoginUserData = await getUser();

    setLoginData(getLoginUserData.data);
    setName(getLoginUserData.data.fullName.split('/')[0]);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h2>{getLoginData.email}</h2>
      <h3>{name}</h3>
    </>
  );
};
export default UserInfo;
