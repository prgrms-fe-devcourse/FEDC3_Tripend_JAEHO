import styled from '@emotion/styled';

export const AuthorInfoContainer = styled.div`
  display: flex;
  width: 60%;
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid #dadada;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;
