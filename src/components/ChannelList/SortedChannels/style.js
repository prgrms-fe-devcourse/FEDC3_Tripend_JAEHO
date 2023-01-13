import styled from '@emotion/styled';

export const SortedChannelContainer = styled.div`
  padding: 6px 10px;
`;
export const DescriptionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-items: center;
  padding: 2px 0;
`;
export const ChannelUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Channel = styled.li`
  font-size: 16px;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ opacity }) => (opacity ? 'visible' : 'hidden')};
  height: ${({ opacity }) => (opacity ? '30px' : '0')};
  padding: ${({ opacity }) => (opacity ? '3px 0 3px 10px' : '0 0 0 10px')};
  transition: opacity 0.2s ease-in-out, height 0.2s ease-in-out;
  background-color: ${({ isClicked }) => (isClicked ? 'var(--gray)' : 'var(--white)')};
  color: ${({ isClicked }) => (isClicked ? 'var(--dark)' : '#8D91A0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;

  &:first-of-type {
    margin-top: ${({ opacity }) => (opacity ? '10px' : '0')};
  }
`;
