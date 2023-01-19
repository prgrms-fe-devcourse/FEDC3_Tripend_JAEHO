import { useRecoilState } from 'recoil';
import { uploadImageState } from '../recoil/uploadImageState';
import { ERROR_MESSAGE, FILE } from '../utils/constants/myHome';
import { useCallback } from 'react';

export const useMyhomeUploadFile = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(uploadImageState);

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

  return {
    selectedImage,

    handleImageChange,
    checkImage,
  };
};
