import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 100px;

  background-color: var(--white);
  height: 80px;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: ${({ isRoot }) =>
    isRoot ? '0px 4px 16px rgba(17, 34, 17, 0.15)' : '0px 4px 16px rgba(17, 34, 17, 0.05)'};
`;

export const LogoContainer = styled.div`
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

  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const AlarmContainer = styled.section`
  position: relative;
`;
