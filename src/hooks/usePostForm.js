import imageCompression from 'browser-image-compression';
import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import swal from 'sweetalert';
import { createPost } from '../apis/post';
import { isVisibleModalState } from '../recoil/addPostStates';
import { ERROR_MESSAGE_POSTMODAL } from '../utils/constant/post';
import { imageToBinary } from '../utils/imageConverter';
import { getStorage } from '../utils/storage';

const initialValues = {
  country: '',
  channelId: '',
  startDate: '',
  endDate: '',
  personnel: 1,
  gender: '',
  title: '',
  content: '',
};

const GenderData = {
  male: '남자만',
  female: '여자만',
  both: '남여 무관',
};

const usePostForm = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const compressImage = useCallback(async (fileSrc) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      return await imageCompression(fileSrc, options);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const validate = useCallback((values) => {
    const errors = [];

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        errors.push(ERROR_MESSAGE_POSTMODAL[key]);
      }
    });

    return errors;
  }, []);

  const generateFormData = useCallback((data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    return formData;
  }, []);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageFileChange = async (e) => {
    let imageFile = e.target.files[0];

    if (!imageFile) {
      return;
    }

    imageFile = await compressImage(imageFile);

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const handleCountryChange = (e) => {
    const { country } = e.target.options[e.target.selectedIndex].dataset;
    setValues((prevValues) => ({ ...prevValues, country, channelId: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!getStorage('Token')) {
      return;
    }

    const newErrors = validate(values);
    const hasError = newErrors.length;

    if (hasError) {
      setErrorMessage([...newErrors]);
      setIsLoading(false);
      return;
    }

    const userData = {
      country: values.country,
      date: `${values.startDate} ~ ${values.endDate}`,
      personnel: values.personnel,
      gender: GenderData[values.gender],
      title: values.title,
      content: values.content,
    };

    const binaryImage = imageSrc ? imageToBinary(imageSrc) : null;

    const data = {
      title: JSON.stringify(userData),
      image: binaryImage,
      channelId: values.channelId,
    };

    const formData = generateFormData(data);

    const response = await createPost(formData);
    if (response.status !== 200) {
      swal('게시글이 정상적으로 생성되지 않았습니다!');
      setIsLoading(false);

      return;
    }

    swal('게시글이 생성되었습니다!');

    setIsVisibleModal(false);
  };

  return {
    imageSrc,
    values,
    isLoading,
    errorMessage,
    handleValueChange,
    handleImageFileChange,
    handleCountryChange,
    handleSubmit,
  };
};

export default usePostForm;
