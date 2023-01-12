import { useRecoilState } from 'recoil';
import { formatDataState, uploadImageState } from '../../recoil/uploadImage';
import { useCallback, useRef, useState } from 'react';
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
    <div>
      <h1>파일 업로드</h1>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={'200px'}
            height={'200px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
        </div>
      )}
      <br />

      <br />
      <Button type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default UploadAndDisplayImage;

const Button = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
