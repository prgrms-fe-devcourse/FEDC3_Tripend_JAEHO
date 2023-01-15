import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
`;

export const RightContainer = styled.div`
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

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const BottomContainer = styled.div`
  width: calc(100% - 28px);
  height: calc(100% - 280px);
  margin-top: 50px;
`;
