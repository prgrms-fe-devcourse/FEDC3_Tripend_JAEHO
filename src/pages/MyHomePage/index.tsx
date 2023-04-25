import UserInfo from '@/components/User/UserInfo';
import UserPageSidebar from '@/components/User/UserPageSidebar';
import UserPost from '@/components/User/UserPost';
import { useState } from 'react';
import { MyPosterContainer, Article } from './style';

const MyPosterPage = () => {
  const [targetId, setTargetId] = useState('myPostList');

  return (
    <MyPosterContainer>
      <UserInfo />
      <Article>
        <UserPageSidebar onclickMenu={setTargetId} />
        <UserPost />
      </Article>
    </MyPosterContainer>
  );
};
export default MyPosterPage;
