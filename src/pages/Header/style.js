import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 100px;
  border-bottom: 1px solid #dee2e6;
  background-color: var(--white);
  height: 80px;
  box-sizing: border-box;
`;

export const LogoContaniner = styled.div`
  cursor: pointer;

  &:hover {
    &:first-of-type {
      border-bottom: 3px solid var(--primary);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: var(--white);

  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    transition: ease-in 0.3s;
  }

  &:active {
    filter: brightness(70%);
  }
`;

export const AlarmContainer = styled.section`
  position: relative;
`;
