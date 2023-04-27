import styled from '@emotion/styled';

const PostItemContainer = styled.div`
  position: relative;
  margin: 20px 10px;
  width: calc(100% - 20px);
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  color: var(--white);
`;

const PosterButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #55d4a9;
  background-color: #ffffff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  max-width: 100%;
`;

const PosterDeleteButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #8dd3bb;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #55d4a9;
  }
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
  height: 80px;
  margin: 10px;
  border-radius: 16px;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;

export {
  PostItemContainer,
  PosterButton,
  PosterDeleteButton,
  PostTitle,
  PostButton,
  ImageItemContainer,
};
