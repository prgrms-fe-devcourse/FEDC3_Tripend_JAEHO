import styled from '@emotion/styled';

const PosterButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #55d4a9;
  background-color: #ffffff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  max-width: 100%;
`;

const PosterDeleteButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #8dd3bb;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #55d4a9;
  }
`;

export { PosterButton, PosterDeleteButton };
