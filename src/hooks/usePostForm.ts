import imageCompression from 'browser-image-compression';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { createPost } from '../apis/post';
import { isVisibleModalState } from '../recoil/addPostStates';
import { selectedChannelNameState, selectedChannelState } from '../recoil/channelState';
import { ERROR_MESSAGE_POST_MODAL } from '../utils/constants/post';
import { imageToBinary } from '../utils/imageConverter';
import { getStorage } from '../utils/storage';

interface formInputs {
  country: string;
  channelId: string;
  personnel: number;
  gender: string;
  startDate: string;
  endDate: string;
  title: string;
  content: string;
}

type userFormdata = {
  [key: string]: any;
};

const initialValues = {
  country: '',
  channelId: '',
  personnel: 1,
  gender: '',
  startDate: '',
  endDate: '',
  title: '',
  content: '',
};

const GenderData = {
  male: '남자만',
  female: '여자만',
  both: '남여 무관',
};

const usePostForm = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const selectedChannelName = useRecoilValue(selectedChannelNameState);
  const [values, setValues] = useState<formInputs>({
    ...initialValues,
    country: selectedChannelName,
    channelId: selectedChannelId,
  });

  const compressImage = useCallback(async (fileSrc: File) => {
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

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    return `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`;
  };

  const validate = useCallback((values: formInputs) => {
    const errors = [];

    const { startDate, endDate, personnel } = values;
    const currentDate = getCurrentDate();

    if (startDate < currentDate) {
      errors.push(ERROR_MESSAGE_POST_MODAL.DATE);
    }

    if (startDate > endDate) {
      errors.push(ERROR_MESSAGE_POST_MODAL.DATE);
    }

    if (personnel > 50) {
      errors.push(ERROR_MESSAGE_POST_MODAL.NOT_VALID_PERSONNEL);
    }

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        const errorType = key.toUpperCase();
        errors.push(ERROR_MESSAGE_POST_MODAL[errorType as keyof typeof ERROR_MESSAGE_POST_MODAL]);
      }
    });

    return errors;
  }, []);

  const generateFormData = useCallback((data: userFormdata) => {
    const formData = new FormData();

    const labels = Object.keys(data);

    labels.forEach((key) => formData.append(key, data[key]));

    return formData;
  }, []);

  const handleValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const imageFile = await compressImage(e.target.files[0]);

    if (!imageFile) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.options[e.target.selectedIndex].dataset;
    if (!data) return;

    const country = data.country!;
    setValues((prevValues) => ({
      ...prevValues,
      country,
      channelId: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
      personnel: values.personnel,
      date: `${values.startDate} ~ ${values.endDate}`,
      gender: GenderData[values.gender as keyof typeof GenderData],
      title: values.title,
      content: values.content,
    };

    const binaryImage = imageSrc ? imageToBinary(imageSrc) : null;

    const data: userFormdata = {
      title: JSON.stringify(userData),
      image: binaryImage,
      channelId: values.channelId,
    };

    const formData = generateFormData(data);

    const response = await createPost(formData);
    if (response.status !== 200) {
      setIsLoading(false);

      return;
    }

    setIsVisibleModal(false);

    navigate(`/main/${values.channelId}`);
  };

  return {
    selectedChannelId,
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
