import { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface BadgeProps {
  top: CSSProperties['top'];
  right: CSSProperties['right'];
  color: CSSProperties['color'];
  size: CSSProperties['width' | 'height'];
}
const Badge = styled.div<BadgeProps>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: block;
  background-color: ${({ color }) => color};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: 2px solid #fff;
`;

export default Badge;
