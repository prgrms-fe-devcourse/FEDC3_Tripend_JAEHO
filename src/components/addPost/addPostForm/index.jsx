import { useState, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { createPost } from '../../../apis/post';
import { getChannels } from '../../../apis/post';
import { isVisibleModalState } from '../../../recoil/addPostStates';
import { imageToBinary } from '../../../utils/imageConverter';

import { InputWrapper } from './style';

const AddPostForm = () => {
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);
  const imageFileInputRef = useRef('');
  const [imageSrc, setImageSrc] = useState('');
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState('');
  const [personnel, setPersonnel] = useState(1);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
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
    let fileBlob = e.target.files[0];

    if (!fileBlob) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePersonnelChange = (e) => {
    setPersonnel(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('Token');

    if (!token) {
      return;
    }

    if (!country || !name || !date || !personnel || !gender) {
      return;
    }

    setIsLoading(true);

    const binaryImage = imageSrc ? imageToBinary(imageSrc) : null;
    const allowableGender =
      gender === 'male' ? '남자만' : gender === 'female' ? '여자만' : '남여 무관';

    const userData = {
      title: `${name}/${date}/${personnel}/${allowableGender}`,
      image: binaryImage,
      channelId: country,
    };

    const formData = new FormData();
    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

    await createPost(formData);

    setIsLoading(false);
    setIsVisibleModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        사진 업로드
        <input
          ref={imageFileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageFileChange}
        />
      </div>
      <InputWrapper>
        <label htmlFor="country">나라</label>
        <select id="country" value={country} onChange={handleCountryChange}>
          {countries.map(({ name, _id }) => (
            <option key={_id} value={_id}>
              {name}
            </option>
          ))}
        </select>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="personnel">인원</label>
        <input type="number" id="personnel" value={personnel} onChange={handlePersonnelChange} />
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
      <InputWrapper>
        <label htmlFor="name">제목</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </InputWrapper>
      <button>{isLoading ? '등록 중...' : '등록'}</button>
    </form>
  );
};

export default AddPostForm;
