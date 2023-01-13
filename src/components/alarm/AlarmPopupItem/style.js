import styled from '@emotion/styled';

export const AlarmItem = styled.li`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }

  &:active {
    background-color: #e2e2e2;
  }
`;

export const AlarmImg = styled.div`
  max-width: 25px;
  max-height: 25px;
  margin-right: 15px;
  opacity: 0.5;
  transition: 0.5s;
`;

export const AlarmText = styled.p`
  margin: 0;
  font-size: 10px;
  transition: 0.5s;
`;
