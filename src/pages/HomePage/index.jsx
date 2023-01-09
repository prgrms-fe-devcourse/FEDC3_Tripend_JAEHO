import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/sidebarRIght';
import Posts from '../../components/Posts';
import * as style from './style';

const MainPage = () => {
  return (
    <style.MainPageContainer>
      <ChannelList />
      <Posts />
      <SideBarRight />
    </style.MainPageContainer>
  );
};

export default MainPage;
