import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/sidebarRIght';
import MainSection from '../../components/MainSection';
import * as style from './style';

const MainPage = () => {
  return (
    <style.MainPageContainer>
      <ChannelList />
      <MainSection />
      <SideBarRight />
    </style.MainPageContainer>
  );
};

export default MainPage;
