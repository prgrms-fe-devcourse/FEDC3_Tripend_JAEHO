import ChannelList from '../../components/ChannelList';
import MainSection from '../../components/MainSection';
import UserSidebar from '../../components/User/UserSidebar';
import { MainPageContainer } from './style';

const MainPage = () => {
  return (
    <MainPageContainer>
      <ChannelList />
      <MainSection />
      <UserSidebar />
    </MainPageContainer>
  );
};

export default MainPage;
