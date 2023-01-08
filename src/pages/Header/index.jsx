import styled from '@emotion/styled';
import AddPost from '../../components/addPost';
import Alarm from '../../components/alarm';

const Header = () => {
  return (
    <HeaderContainer>
      <span>HEADER자리</span>
      <Alarm />
      <AddPost />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #000;
  height: 100px;
`;
