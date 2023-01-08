import styled from '@emotion/styled';
import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/sidebarRIght';
import Trips from '../../components/trips';

const MainPage = () => {
  return (
    <MainPageContainer>
      <ChannelList />
      <Trips />
      <SideBarRight />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
`;
