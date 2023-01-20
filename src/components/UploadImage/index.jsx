import UploadIcon from '../../../static/images/upload.svg';
import { ImageFileInput } from '../AddPost/AddPostForm/style';
import {
  ImageContainer,
  ImageUploaderContainer,
  TitleWrapper,
  UploadDescription,
  UploadImageWrapper,
} from './style';
import { useMyhomeUploadFile } from '../../hooks/useMyhomeUploadFile';

const UploadAndDisplayImage = ({ postId }) => {
  const { selectedImage, handleImageChange } = useMyhomeUploadFile();

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
      </ImageContainer>

      <ImageFileInput type="file" onChange={handleImageChange} />
    </ImageUploaderContainer>
  );
};

export default UploadAndDisplayImage;
