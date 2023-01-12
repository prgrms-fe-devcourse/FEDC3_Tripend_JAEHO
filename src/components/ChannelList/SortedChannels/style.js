import styled from '@emotion/styled';

export const SortedChannelContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 0;
`;
export const Channel = styled.li`
  font-size: 15px;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ opacity }) => (opacity ? 'visible' : 'hidden')};
  height: ${({ opacity }) => (opacity ? '18px' : '0')};
  padding: ${({ opacity }) => (opacity ? '3px 0 3px 25px' : '0 0 0 25px')};
  transition: opacity 0.2s ease-in-out, height 0.2s ease-in-out;
  font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'normal')}; ;
`;
