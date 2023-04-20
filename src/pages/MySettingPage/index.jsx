import UserInfo from '@/components/User/UserInfo';
import UserPageSidebar from '@/components/User/UserPageSidebar';
import UserPost from '@/components/User/UserPost';
import { useState } from 'react';
import UserSettingPassword from '../../components/User/UserSettingPassword';

const MySettingPage = () => {
  const [targetId, setTargetId] = useState('myPostList');

  return (
    <>
      <UserInfo />
      {targetId === 'myPostList' ? <UserPost /> : <UserSettingPassword />}
      <UserPageSidebar onclickMenu={setTargetId} />
    </>
  );
};
export default MySettingPage;
