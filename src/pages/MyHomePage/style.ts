import styled from '@emotion/styled';

const MyPosterContainer = styled.div`
  padding: 0 100px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
`;

const Article = styled.div`
  display: flex;
`;

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

export {
  MyPosterContainer,
  Article,
  ModalRight,
  ModalLeft,
  PostTitle,
  PostButton,
  ImageItemContainer,
};
