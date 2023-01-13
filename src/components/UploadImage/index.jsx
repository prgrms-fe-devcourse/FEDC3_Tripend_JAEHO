import { useRecoilState } from 'recoil';
import { formatDataState, uploadImageState } from '../../recoil/uploadImage';
import { useCallback, useRef, useState } from 'react';
import UploadIcon from '../../../static/images/upload.svg';
import {
  ImageContainar,
  TitleWrapper,
  UploadDescription,
  UploadImageWrapper,
  ImageUploaderContainer,
} from './style';
import { ImageFileInput } from '../addPost/addPostForm/style';
import styled from '@emotion/styled';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);
  const [formatImage, setFormatImage] = useRecoilState(formatDataState);

  const [data, setData] = useState(null);

  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    },
    [selectedImage]
  );

  return (
    <ImageUploaderContainer>
      <ImageContainar>
        {selectedImage ? (
          <div>
            <img
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
              }}
              src={URL.createObjectURL(selectedImage)}
              alt="사진"
            />
          </div>
        ) : (
          <UploadImageWrapper>
            <UploadIcon />
            <TitleWrapper>
              <p>사진 업로드</p>
            </TitleWrapper>
            <UploadDescription>
              Supported formates: JPEG,PNG,GIF,MP4,PDF,PSD,SVG,WEBP
            </UploadDescription>
          </UploadImageWrapper>
        )}
      </ImageContainar>

      <br />

      <br />

      <ImageFileInput type="file" onChange={handleImageChange} />
    </ImageUploaderContainer>
  );
};

export default UploadAndDisplayImage;
