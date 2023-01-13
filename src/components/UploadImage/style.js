import styled from '@emotion/styled';

const ImageContainar = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const UploadImageWrapper = styled.div`
  height: 50px;
  width: 100px;
`;

const UploadDescription = styled.span`
  color: #676767;
  width: 350px;
  font-size: 10px;
  display: block;
  font-weight: 400;
  position: absolute;
  right: 5%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ImageContainar, UploadImageWrapper, UploadDescription, TitleWrapper };
