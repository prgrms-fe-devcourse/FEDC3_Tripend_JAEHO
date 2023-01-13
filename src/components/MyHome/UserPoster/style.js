import styled from '@emotion/styled';

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTitleButton = styled.button`
  background-color: white;
  font-size: 28px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  left: 43%;
  width: 30px;
  bottom: 30%;
  border: none;
  color: darkgray;
`;
const ModalTitle = styled.h3``;

export { ModalTitleWrapper, ModalTitleButton, ModalTitle };
