import { useState } from 'react';
import { InputWrapper } from './style';
import { useRef } from 'react';

const AddPostForm = () => {
  const imageFileInputRef = useRef('');
  const [imageSrc, setImageSrc] = useState('');
  const [date, setDate] = useState('');
  const [personnel, setPersonnel] = useState(1);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  const onImageFileChange = async (e) => {
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

    const travel_name = name;
    const travel_date = date;
    const travel_personnel = personnel;
    const travel_gender =
      gender === 'male' ? '남자만' : gender === 'female' ? '여자만' : '남여 무관';

    const userData = {
      title: `${travel_name}/${travel_date}/${travel_personnel}/${travel_gender}`,
      image: null,
      channelId: '63b93150230951110b843cee',
    };
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        사진 업로드
        <input
          ref={imageFileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onImageFileChange}
        />
      </div>
      <InputWrapper>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="number">인원</label>
        <input type="number" id="number" value={personnel} onChange={handlePersonnelChange} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="gender">원하는 성별</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="male">남자만</option>
          <option value="female">여자만</option>
          <option value="both">남여 무관</option>
        </select>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="name">제목</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </InputWrapper>
      <button>등록</button>
    </form>
  );
};

export default AddPostForm;
