import styled from '@emotion/styled';

export const AuthorInfoContainer = styled.div`
  display: flex;
  width: 60%;
  min-width: 150px;
`;
export const AuthorInfoTextContainer = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > div:first-of-type {
    font-weight: bold;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  & > div:last-of-type {
    font-size: var(--font-subtitle-size);
  }
`;
