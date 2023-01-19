import styled from '@emotion/styled';

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

export { ModalTitleWrapper, ModalTitleButton, ModalTitle };
