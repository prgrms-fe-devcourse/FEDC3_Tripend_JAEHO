import PostCategoryList from '@/components/Post/PostCategoryList';
import PostList from '@/components/Post/PostList';
import UserSidebar from '@/components/User/UserSidebar';
import { MainPageContainer } from './style';

const MainPage = () => {
  return (
    <MainPageContainer>
      <PostCategoryList />
      <PostList />
      <UserSidebar />
    </MainPageContainer>
  );
};

export default MainPage;
