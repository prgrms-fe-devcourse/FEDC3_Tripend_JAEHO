import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
`;

export const RightContainer = styled.div`
  position: relative;
  width: calc(50% - 28px);
  padding-left: 28px;
  display: flex;
  flex-direction: column;
`;

export const RightContainerContent = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'start')};
  align-items: ${({ alignItem }) => (alignItem ? alignItem : 'center')};
`;

export const AccompanyButton = styled.button`
  width: 129px;
  height: 50px;
  background-color: var(--primary);
  color: #112211;
  padding: 5px;
  margin-left: 15px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`;
export const BottomContainer = styled.div`
  position: absolute;
  bottom: 50px;
`;
export const CommentCount = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  & > img {
    width: 24px;
    height: 24px;
    padding-right: 10px;
  }
  & > input {
    font-size: 14px;
  }
`;
