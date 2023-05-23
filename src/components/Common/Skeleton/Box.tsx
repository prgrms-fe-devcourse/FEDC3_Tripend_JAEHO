import styled from '@emotion/styled';
import Base from './Base';

const Box = styled(Base)<{ width: number | string; height: number | string }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;

export default Box;
