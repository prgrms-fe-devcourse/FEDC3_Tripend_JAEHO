import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 16px;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;
