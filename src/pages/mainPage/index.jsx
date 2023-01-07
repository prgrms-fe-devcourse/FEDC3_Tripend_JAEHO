import styled from '@emotion/styled';
import SidebarLeft from '../../components/sidebarLeft';
import SideBarRight from '../../components/sidebarRIght';
import Trips from '../../components/trips';

const MainView = () => {
  return (
    <MainPageContainer>
      <SidebarLeft />
      <Trips />
      <SideBarRight />
    </MainPageContainer>
  );
};

export default MainView;

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
`;
