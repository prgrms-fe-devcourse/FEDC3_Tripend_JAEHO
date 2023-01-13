import { HeaderContainer, LogoContaniner } from '../style';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../static/images/Logo.svg';

const PrivateHeader = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderContainer>
        <LogoContaniner onClick={handleClickLogo}>
          <Logo />
        </LogoContaniner>
      </HeaderContainer>
    </>
  );
};

export default PrivateHeader;
