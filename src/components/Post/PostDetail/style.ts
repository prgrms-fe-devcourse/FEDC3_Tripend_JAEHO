import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  color: var(--font-main-color);
  padding: 20px;
  display: flex;
`;

export const RightContainer = styled.div`
  width: calc(50% - 28px);
  padding-left: 28px;
  display: flex;
  flex-direction: column;
`;

export const RightContainerContent = styled.div<{
  flexDirection?: string;
  justifyContent?: string;
  alignItem?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'start')};
  align-items: ${({ alignItem }) => (alignItem ? alignItem : 'center')};
`;

export const Title = styled.div`
  font-size: var(--font-title-size);
  font-weight: bold;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: calc(100% - 280px);
  margin-top: 40px;
`;

export const Country = styled.div`
  font-size: 14px;

  & > span {
    position: relative;
    top: -3px;
    font-size: var(--font-subtitle-size);
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  font-size: 15px;
`;
