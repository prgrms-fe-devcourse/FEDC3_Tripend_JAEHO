import { useEffect, useState } from 'react';
import { getChannels } from '../../../apis/post';

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

import UploadIcon from '../../../../static/images/upload.svg';
import usePostForm from '../../../hooks/usePostForm';
import ErrorText from './ErrorText';

const AddPostForm = () => {
  const [countries, setCountries] = useState([]);
  const {
    imageSrc,
    values,
    isLoading,
    errorMessage,
    handleValueChange,
    handleImageFileChange,
    handleCountryChange,
    handleSubmit,
  } = usePostForm();

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

  return (
    <PostForm onSubmit={handleSubmit}>
      <ImageUploader>
        <ImageFileInput
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageFileChange}
        />
        <ImageFileContent>
          {imageSrc ? (
            <UploadedImage>
              <img src={imageSrc} alt="userImage" />
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
          <select
            id="country"
            name="country"
            value={values.channelId}
            onChange={handleCountryChange}
          >
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
              name="personnel"
              value={values.personnel}
              min="1"
              onChange={handleValueChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="gender">원하는 성별</label>
            <select id="gender" name="gender" value={values.gender} onChange={handleValueChange}>
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
            <input
              type="date"
              id="date"
              name="startDate"
              value={values.startDate}
              onChange={handleValueChange}
            />
            부터
            <input
              type="date"
              id="date"
              name="endDate"
              value={values.endDate}
              onChange={handleValueChange}
            />
            까지
          </InputsAlign>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleValueChange}
            placeholder="제목을 입력해주세요."
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={handleValueChange}
            placeholder="내용을 입력해주세요."
          />
        </InputWrapper>
        <SubmitButton>
          {!isLoading && errorMessage.length ? (
            <ErrorText message={errorMessage[0]} />
          ) : isLoading ? (
            '등록 중...'
          ) : (
            '등록'
          )}
        </SubmitButton>
      </FormContainer>
    </PostForm>
  );
};

export default AddPostForm;
