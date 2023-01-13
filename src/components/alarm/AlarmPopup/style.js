import styled from '@emotion/styled';

export const AlarmPopupContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 5px 20px;
  width: 200px;
  max-height: 400px;
  overflow: auto;
  z-index: 10000;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: -5px;
    right: 15px;
    background-color: #f4f4f4;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 10px 0;
`;

export const AlarmList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  box-sizing: border-box;

  &:last-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;
