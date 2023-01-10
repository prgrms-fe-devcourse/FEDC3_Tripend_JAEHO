import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
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
export const CommentInfo = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  justify-content: space-around;

  & > div:first-child {
    font-weight: bold;
    font-size: 15px;
  }
  & > div:last-child {
    font-size: 14px;
  }
`;
