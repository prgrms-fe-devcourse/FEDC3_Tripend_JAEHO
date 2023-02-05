import styled from '@emotion/styled';

const ModalRight = styled.div`
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
`;

const ModalLeft = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  box-sizing: border-box;
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30%;
  width: 50%;
  bottom: 25%;
  justify-content: space-between;
  font-size: 0.8rem;
  p {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.5rem;
      font-weight: 200;
      width: 100%;
    }
  }
`;

const PostButton = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  position: absolute;
  right: 5%;
  bottom: 30%;
  color: #cccbc7;
  button {
    margin-right: 10px;
  }
`;

const ImageItemContainer = styled.div`
  width: 100px;
  height: 70px;
  margin: 10px;
  border-radius: 16px;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;

const PosterTitle = styled.div`
  width: 74.9%;
  height: 100px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  left: 25%;
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PostItemContainer = styled.div`
  position: relative;
  margin: 20px 10px;
  width: 50%;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PosterContainer = styled.div`
  min-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  ModalRight,
  ModalLeft,
  PostTitle,
  PostButton,
  ImageItemContainer,
  PosterTitle,
  PostWrapper,
  PostItemContainer,
  PosterContainer,
};
