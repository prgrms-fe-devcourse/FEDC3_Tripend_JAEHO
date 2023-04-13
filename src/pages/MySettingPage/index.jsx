import { useState } from 'react';
import UserSettingPassword from '../../components/MyHome';
import UserInfo from '../../components/MyHome/UserInfo';
import LoginPoster from '../../components/MyHome/UserPoster';
import UserPageSidebar from '../../components/UserPageSidebar';

const MySettingPage = () => {
  const [targetId, setTargetId] = useState('myPostList');

  return (
    <>
      <UserInfo />
      {targetId === 'myPostList' ? <LoginPoster /> : <UserSettingPassword />}
      <UserPageSidebar onclickMenu={setTargetId} />
    </>
  );
};
export default MySettingPage;
