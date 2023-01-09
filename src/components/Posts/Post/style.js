import styled from '@emotion/styled';

export const PostContainer = styled.div`
  height: 200px;
  padding: 20px;
  margin: 20px;
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ImageContainer = styled.div`
  width: 280px;
  padding: 10px;
  border-radius: 16px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
export const InfoContainer = styled.div`
  position: relative;
  width: calc(100% - 300px);
  height: 100%;
  padding: 10px;
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
export const TagContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
export const Tag = styled.span`
  background-color: var(--dark4);
  color: var(--white);
  padding: 10px;
  margin: 0 5px;
  border-radius: 20px;
  font-size: 10px;

  &:nth-of-type(1) {
    margin-left: 0;
  }
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 30px;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  width: 60%;
`;
export const LikeAndCommentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-around;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 15px;
`;
