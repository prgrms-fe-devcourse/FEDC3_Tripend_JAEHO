import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface ImageContainerProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 16px;
  background-color: #eee;
  overflow: hidden;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;
