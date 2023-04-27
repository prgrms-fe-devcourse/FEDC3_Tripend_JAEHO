import UserInfo from '@/components/User/UserInfo';
import UserPageSidebar from '@/components/User/UserPageSidebar';
import UserPost from '@/components/User/UserPost';
import UserSettingPassword from '@/components/User/UserSettingPassword';
import { useState } from 'react';
import { Article, MyPosterContainer } from './style';

const MyPosterPage = () => {
  const [targetId, setTargetId] = useState('myPostList');

  return (
    <MyPosterContainer>
      <UserInfo />
      <Article>
        <UserPageSidebar targetId={targetId} onclickMenu={setTargetId} />
        {targetId === 'myPostList' ? <UserPost /> : <UserSettingPassword />}
      </Article>
    </MyPosterContainer>
  );
};
export default MyPosterPage;
