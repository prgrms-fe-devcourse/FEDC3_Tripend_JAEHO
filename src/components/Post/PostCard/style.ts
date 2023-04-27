import styled from '@emotion/styled';

export const PostContainer = styled.div`
  height: 200px;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background-color: var(--background-color);
  color: var(--font-main-color);
  cursor: pointer;

  &:hover {
    position: relative;
    top: -3px;
    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.15);
    transition: box-shadow 0.2s ease-out;
  }
`;

export const InfoContainer = styled.div`
  width: calc(100% - 310px);
  height: calc(100% - 30px);
  padding: 15px;
  border-radius: 16px;
`;

export const InfoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TravelName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
`;
