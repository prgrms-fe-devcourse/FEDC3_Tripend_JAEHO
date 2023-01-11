import styled from '@emotion/styled';

export const AlarmItem = styled.li`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }

  &:active {
    background-color: #e2e2e2;
  }
`;

export const AlarmImg = styled.img`
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  margin-right: 20px;
  opacity: 0.5;
  transition: 0.5s;
`;

export const AlarmText = styled.p`
  margin: 0;
  font-size: 10px;
  transition: 0.5s;
`;
