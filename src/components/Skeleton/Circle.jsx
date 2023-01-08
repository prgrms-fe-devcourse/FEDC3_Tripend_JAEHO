import Base from "./Base";
import styled from "@emotion/styled";

const Circle = styled(Base)`
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  border-radius: 50%;
`;

export default Circle;
