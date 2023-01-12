import styled from '@emotion/styled';

export const ModalRight = styled.div`
  width: 50%;
  height: 450px;
  float: right;
  box-sizing: border-box;
  border: 3px solid black;
`;

export const ModalLeft = styled.div`
  width: 50%;
  height: 450px;
  float: left;
  box-sizing: border-box;
  border: 3px solid blue;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30%;
  width: 50%;
  bottom: 25%;

  justify-content: space-between;
`;

export const PostButton = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  position: absolute;
  right: 10%;
  bottom: 40%;
  color: #cccbc7;
  button {
    margin-right: 10px;
  }
`;

export const ImageContainer2 = styled.div`
  width: 100px;
  height: 70px;
  margin: 20px;
  border-radius: 16px;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PostContainer2 = styled.div`
  position: relative;
  height: 100px;
  margin: 10px;
  width: 50%;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;