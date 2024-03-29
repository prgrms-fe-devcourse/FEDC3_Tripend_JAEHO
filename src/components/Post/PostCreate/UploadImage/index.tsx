import { ImageFileInput } from '@/components/Post/PostCreate/AddPostForm/style';
import { uploadImageState } from '@/recoil/uploadImageState';
import { ERROR_MESSAGE, FILE } from '@/utils/constants/user';
import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import swal from 'sweetalert';
import {
  ImageContainer,
  ImageUploaderContainer,
  TitleWrapper,
  UploadDescription,
  UploadImageWrapper,
} from './style';
import uploadIcon from '/assets/upload.svg';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useRecoilState<any | null>(
    uploadImageState
  );

  const checkImage = (file: File) => {
    if (
      file.type === FILE.JPEG ||
      file.type === FILE.SVG ||
      file.type === FILE.PNG
    ) {
      setSelectedImage(file);
    } else {
      swal(ERROR_MESSAGE.UPLOAD_IMAGE);
      return;
    }
  };

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files !== null) {
        const file = e.target.files[0];
        checkImage(file);
      }
    },
    [selectedImage]
  );
  return (
    <ImageUploaderContainer>
      <ImageContainer>
        {selectedImage ? (
          <div>
            <img
              style={{
                borderRadius: '5px',
                width: '463px',
                height: '590px',
                objectFit: 'cover',
              }}
              src={URL.createObjectURL(selectedImage)}
              alt="사진"
            />
          </div>
        ) : (
          <UploadImageWrapper>
            <TitleWrapper>
              <img src={uploadIcon} alt="upload-icon" />
              <p>사진 업로드</p>
            </TitleWrapper>
            <div
              style={{
                width: '300px',
              }}
            >
              <UploadDescription>
                Supported formates: JPEG,PNG,SVG
              </UploadDescription>
              <ImageFileInput type="file" onChange={handleImageChange} />
            </div>
          </UploadImageWrapper>
        )}
      </ImageContainer>

      <ImageFileInput type="file" onChange={handleImageChange} />
    </ImageUploaderContainer>
  );
};

export default UploadAndDisplayImage;
