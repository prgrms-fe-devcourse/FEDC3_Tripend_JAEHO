import ChannelList from '../../components/ChannelList';
import MainSection from '../../components/MainSection';
import { MainPageContainer } from './style';
import UserSidebar from '../../components/UserSidebar';

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
