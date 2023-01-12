import ChannelList from '../../components/ChannelList';
import SideBarRight from '../../components/SidebarRIght';
import MainSection from '../../components/MainSection';
import AddPost from '../../components/addPost';

import { useRecoilValue } from 'recoil';
import { isVisibleModalState } from '../../recoil/addPostStates';

import * as style from './style';

const MainPage = () => {
  const isVisibleModal = useRecoilValue(isVisibleModalState);

  return (
    <style.MainPageContainer>
      {isVisibleModal && <AddPost visible={isVisibleModal} />}
      <ChannelList />
      <MainSection />
      <SideBarRight />
    </style.MainPageContainer>
  );
};

export default MainPage;
