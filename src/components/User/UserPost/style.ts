import styled from '@emotion/styled';

const UserPostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  width: 74.9%;
  font-weight: 700;
  font-size: 32px;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTitleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 25px;
  cursor: pointer;
  outline: inherit;
`;

const ModalTitle = styled.h3``;

export {
  UserPostContainer,
  HeaderTitle,
  PostsWrapper,
  ModalTitleWrapper,
  ModalTitleButton,
  ModalTitle,
};
