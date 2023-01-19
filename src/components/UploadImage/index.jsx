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

  // const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);
  // const [formatImage, setFormatImage] = useRecoilState(formatDataState);
  //
  // const [data, setData] = useState(null);
  //
  // const [image, setImage] = useState(null);
  //
  // const checkImage = (file) => {
  //   if (file.type === FILE.JPEG || file.type === FILE.SVG || file.type === FILE.PNG) {
  //     setSelectedImage(file);
  //   } else {
  //     swal(ERROR_MESSAGE.UPLOAD_IMAGE);
  //     return;
  //   }
  // };
  //
  // useEffect(() => {
  //   const getPostModalDetail = async () => {
  //     const getPostDetail = await getMyPostDetail(postId);
  //
  //     if (getPostDetail.data) {
  //       setImage(getPostDetail.data.image);
  //     }
  //   };
  //   getPostModalDetail();
  // });
  //
  // const handleImageChange = useCallback(
  //   (e) => {
  //     const file = e.target.files[0];
  //     checkImage(file);
  //   },
  //   [selectedImage]
  // );

  return (
    <ImageUploaderContainer>
      <ImageContainer>
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
      </ImageContainer>

      <ImageFileInput type="file" onChange={handleImageChange} />
    </ImageUploaderContainer>
  );
};

export default UploadAndDisplayImage;
