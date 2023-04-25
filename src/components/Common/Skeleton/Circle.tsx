import styled from '@emotion/styled';
import Base from './Base';

const Circle = styled(Base)<{ size: string | number }>`
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  border-radius: 50%;
`;

export default Circle;
