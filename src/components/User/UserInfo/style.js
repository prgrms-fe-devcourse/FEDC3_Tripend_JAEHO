import styled from '@emotion/styled';

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 1000px;
  width: 100%;
  img {
    margin-right: 20px;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #8d8d8d;
  }
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 100px;
  margin-top: 50px;
  border-radius: 50%;
`;
const UserInfoProfileWrapper = styled.div`
  margin-left: 20px;
`;

export { UserInfoContainer, UserInfoWrapper, UserInfoProfileWrapper };
