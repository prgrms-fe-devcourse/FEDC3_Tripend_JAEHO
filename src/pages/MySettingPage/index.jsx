import { useState } from 'react';
import UserSettingPassword from '../../components/MyHome';
import UserInfo from '../../components/MyHome/UserInfo';
import LoginPoster from '../../components/MyHome/UserPoster';
import UserSidebar from '../../components/Sidebar';

const MySettingPage = () => {
  const [targetId, setTargetId] = useState('myPostList');

  return (
    <>
      <UserInfo />
      {targetId === 'myPostList' ? <LoginPoster /> : <UserSettingPassword />}
      <UserSidebar onclickMenu={setTargetId} />
    </>
  );
};
export default MySettingPage;
