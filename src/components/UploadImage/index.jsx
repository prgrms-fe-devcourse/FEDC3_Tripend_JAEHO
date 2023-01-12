import { useRecoilState } from 'recoil';
import { formatDataState, uploadImageState } from '../../recoil/uploadImage';
import { useCallback, useRef, useState } from 'react';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);
  const [formatImage, setFormatImage] = useRecoilState(formatDataState);

  const [data, setData] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <h1>파일 업로드</h1>
      {selectedImage && (
        <div>
          <img alt="not fount" width={'250px'} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button>이미지 업로드</button>
        </div>
      )}
      <br />

      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default UploadAndDisplayImage;

// onChange={(e) => {
//     console.log(e.target.files[0]);
//
//     const formData = new FormData();
//     formData.append('image', e.target.files[0]);
//     setFormatImage(formData);
//     setFileName(formData);
//     setSelectedImage(e.target.files[0]);
// }}
