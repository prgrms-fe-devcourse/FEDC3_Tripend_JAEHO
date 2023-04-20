import styled from '@emotion/styled';

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 34px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
