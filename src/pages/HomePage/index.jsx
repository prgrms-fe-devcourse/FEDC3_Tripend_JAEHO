import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/SidebarRIght';
import MainSection from '../../components/MainSection';
import AddPost from '../../components/addPost';

import { useRecoilValue } from 'recoil';
import { isVisibleModalState } from '../../recoil/addPostStates';
import { MainPageContainer } from './style';

const MainPage = () => {
  const isVisibleModal = useRecoilValue(isVisibleModalState);

  return (
    <MainPageContainer>
      {isVisibleModal && <AddPost visible={isVisibleModal} />}
      <ChannelList />
      <MainSection />
      <SideBarRight />
    </MainPageContainer>
  );
};

export default MainPage;
