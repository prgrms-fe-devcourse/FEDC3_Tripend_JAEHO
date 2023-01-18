import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/sidebarRIght';
import MainSection from '../../components/MainSection';
import { MainPageContainer } from './style';

const MainPage = () => {
  return (
    <MainPageContainer>
      <ChannelList />
      <MainSection />
      <SideBarRight />
    </MainPageContainer>
  );
};

export default MainPage;
