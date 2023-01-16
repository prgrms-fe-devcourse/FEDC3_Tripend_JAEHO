import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isVisibleModalState } from '../../../recoil/addPostStates';
import { imageToBinary } from '../../../utils/imageConverter';
import { getStorage } from '../../../utils/storage';
import { createPost, getChannels } from '../../../apis/post';

import UploadIcon from '../../../../static/images/upload.svg';
import {
  Description,
  FormContainer,
  ImageFileContent,
  ImageFileInput,
  ImageUploader,
  InputsAlign,
  InputWrapper,
  PostForm,
  SubmitButton,
  Title,
  UploadedImage,
} from './style';

const GenderData = {
  male: '남자만',
  female: '여자만',
  both: '남여 무관',
};

const AddPostForm = () => {
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);
  const imageFileInputRef = useRef('');
  const [imageSrc, setImageSrc] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [channelId, setChannelId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [personnel, setPersonnel] = useState(1);
  const [gender, setGender] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ChannelList 컴포넌트 내부 getChannelData 함수와 중복 => 분리
  const getChannelData = async () => {
    const { data } = await getChannels();

    const eastEurope = data.filter(({ description }) => description === '동유럽');
    const westEurope = data.filter(({ description }) => description === '서유럽');
    const southEurope = data.filter(({ description }) => description === '남유럽');
    const northEurope = data.filter(({ description }) => description === '북유럽');

    setCountries([
      { _id: '0', name: '=== 선택 ===' },
      ...eastEurope,
      ...westEurope,
      ...southEurope,
      ...northEurope,
    ]);
  };

  useEffect(() => {
    getChannelData();
  }, []);

  const handleImageFileChange = async (e) => {
    let imageFile = e.target.files[0];

    if (!imageFile) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const handleCountryChange = (e) => {
    const { country } = e.target.options[e.target.selectedIndex].dataset;
    setCountry(country);
    setChannelId(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handlePersonnelChange = (e) => {
    setPersonnel(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!getStorage('Token')) {
      return;
    }

    if (!country || !channelId || !title || !startDate || !endDate || !personnel || !gender) {
      return;
    }

    setIsLoading(true);

    const userData = {
      country,
      date: `${startDate} ~ ${endDate}`,
      personnel,
      gender: GenderData[gender],
      title,
      content,
    };

    const binaryImage = imageSrc ? imageToBinary(imageSrc) : null;

    const data = {
      title: JSON.stringify(userData),
      image: binaryImage,
      channelId,
    };

    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    await createPost(formData);

    setIsLoading(false);
    setIsVisibleModal(false);
  };

  return (
    <PostForm onSubmit={handleSubmit}>
      <ImageUploader>
        <ImageFileInput
          ref={imageFileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageFileChange}
        />
        <ImageFileContent>
          {imageSrc ? (
            <UploadedImage>
              <img src={imageSrc} alt="사진" />
            </UploadedImage>
          ) : (
            <>
              <UploadIcon />
              <Title>사진 업로드</Title>
              <Description>png, jpeg, jpg 포맷 파일만 업로드할 수 있습니다.</Description>
            </>
          )}
        </ImageFileContent>
      </ImageUploader>
      <FormContainer>
        <InputWrapper>
          <label htmlFor="country">나라</label>
          <select id="country" value={channelId} onChange={handleCountryChange}>
            {countries.map(({ name, _id }) => (
              <option key={_id} value={_id} data-country={name}>
                {name}
              </option>
            ))}
          </select>
        </InputWrapper>
        <InputsAlign>
          <InputWrapper>
            <label htmlFor="personnel">인원</label>
            <input
              type="number"
              id="personnel"
              value={personnel}
              min="1"
              onChange={handlePersonnelChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="gender">원하는 성별</label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
              <option value={null}>=== 선택 ===</option>
              <option value="male">남자만</option>
              <option value="female">여자만</option>
              <option value="both">남여 무관</option>
            </select>
          </InputWrapper>
        </InputsAlign>
        <InputWrapper>
          <label htmlFor="date">기간</label>
          <InputsAlign>
            <input type="date" id="date" value={startDate} onChange={handleStartDateChange} />
            부터
            <input type="date" id="date" value={endDate} onChange={handleEndDateChange} />
            까지
          </InputsAlign>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요."
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력해주세요."
          />
        </InputWrapper>
        <SubmitButton>{isLoading ? '등록 중...' : '등록'}</SubmitButton>
      </FormContainer>
    </PostForm>
  );
};

export default AddPostForm;
