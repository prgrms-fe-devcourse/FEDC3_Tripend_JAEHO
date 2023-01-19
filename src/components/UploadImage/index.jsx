import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import UploadIcon from '../../../static/images/upload.svg';
import { getMyPostDetail } from '../../apis/post';
import { formatDataState, uploadImageState } from '../../recoil/uploadImageState';
import { ERROR_MESSAGE, FILE } from '../../utils/myhome/constant';
import { ImageFileInput } from '../AddPost/AddPostForm/style';
import {
  ImageContainar,
  ImageUploaderContainer,
  TitleWrapper,
  UploadDescription,
  UploadImageWrapper,
} from './style';

const UploadAndDisplayImage = ({ postId }) => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);
  const [formatImage, setFormatImage] = useRecoilState(formatDataState);

  const [data, setData] = useState(null);

  const [image, setImage] = useState(null);

  const checkImage = (file) => {
    if (file.type === FILE.JPEG || file.type === FILE.SVG || file.type === FILE.PNG) {
      setSelectedImage(file);
    } else {
      swal(ERROR_MESSAGE.UPLOAD_IMAGE);
      return;
    }
  };

  useEffect(() => {
    const getPostModalDetail = async () => {
      const getpostDetail = await getMyPostDetail(postId);

      if (getpostDetail.data) {
        setImage(getpostDetail.data.image);
      }
    };
    getPostModalDetail();
  });

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
                borderRadius: '5px',
                width: '463px',
                height: '520px',
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
              }}
            >
              {/*{image && <Image src={image} alt="사진" />}*/}
              <UploadDescription>Supported formates: JPEG,PNG,SVG</UploadDescription>
              <ImageFileInput type="file" onChange={handleImageChange} />
            </div>
          </UploadImageWrapper>
        )}
      </ImageContainar>

      <ImageFileInput type="file" onChange={handleImageChange} />
    </ImageUploaderContainer>
  );
};

export default UploadAndDisplayImage;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  top: 20%;
  left: 20%;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
