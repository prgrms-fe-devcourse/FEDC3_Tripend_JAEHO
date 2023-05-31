import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface TagContainerProps {
  alignItem: CSSProperties['alignItems'];
}

export const TagContainer = styled.div<TagContainerProps>`
  height: 50px;
  display: flex;
  align-items: ${({ alignItem }) => (alignItem ? alignItem : 'center')};
`;

export const Tag = styled.span`
  background-color: var(--primary);
  font-weight: bold;
  padding: 10px;
  margin: 0 5px;
  border-radius: 20px;
  font-size: 10px;

  &:nth-of-type(1) {
    margin-left: 0;
  }
`;
