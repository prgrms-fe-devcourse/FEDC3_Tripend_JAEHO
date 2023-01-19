import styled from '@emotion/styled';

const Badge = styled.div`
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
