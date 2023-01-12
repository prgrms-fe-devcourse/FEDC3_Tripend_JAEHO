import styled from '@emotion/styled';

export const TagContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: ${({ alignItem }) => (alignItem ? alignItem : 'center')};
`;
export const Tag = styled.span`
  background-color: var(--primary);
  color: var(--dark);
  font-weight: bold;
  padding: 10px;
  margin: 0 5px;
  border-radius: 20px;
  font-size: 10px;

  &:nth-of-type(1) {
    margin-left: 0;
  }
`;
