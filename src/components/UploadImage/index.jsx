import { useRecoilState } from 'recoil';
import { uploadImageState } from '../../recoil/uploadImage';
import { useState } from 'react';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);

  const [filename, setFileName] = useState('');
  console.log(selectedImage);

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setFileName('');
  };

  return (
    <div>
      <h1>파일 업로드</h1>
      {selectedImage && (
        <div>
          <img alt="not fount" width={'250px'} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={handleDeleteImage}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
