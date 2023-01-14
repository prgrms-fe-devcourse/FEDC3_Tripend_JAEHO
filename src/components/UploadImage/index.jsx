import { useRecoilState } from 'recoil';
import { useCallback, useEffect, useRef, useState } from 'react';
import UploadIcon from '../../../static/images/upload.svg';
import {
  ImageContainar,
  TitleWrapper,
  UploadDescription,
  UploadImageWrapper,
  ImageUploaderContainer,
} from './style';
import { ImageFileInput } from '../addPost/addPostForm/style';
import { ERROR_MESSAGE, FILE } from '../../utils/myhome/constant';
import { formatDataState, uploadImageState } from '../../recoil/uploadImageState';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);
  const [formatImage, setFormatImage] = useRecoilState(formatDataState);

  const [data, setData] = useState(null);

  const checkImage = (file) => {
    if (file.type === FILE.JPEG || file.type === FILE.SVG || file.type === FILE.PNG) {
      setSelectedImage(file);
    } else {
      swal(ERROR_MESSAGE.UPLOAD_IMAGE);
      return;
    }
  };

  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      checkImage(file);
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
            <TitleWrapper>
              <UploadIcon />
              <p>사진 업로드</p>
            </TitleWrapper>
            <div
              style={{
                width: '300px',
                marginRight: '300px',
              }}
            >
              <UploadDescription>Supported formates: JPEG,PNG,SVG</UploadDescription>
            </div>
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
