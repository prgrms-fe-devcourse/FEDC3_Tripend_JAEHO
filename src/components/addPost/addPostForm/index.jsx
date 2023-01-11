import { useState } from 'react';
import { InputWrapper } from './style';
import { createPost } from '../../../apis/post';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedChannelState } from '../../../utils/channelState';

const imageToBinary = (imgSrc) => {
  const byteString = atob(imgSrc.split(',')[1]);
  console.log(byteString);

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], {
    type: 'image/jpeg',
  });

  console.log(blob);

  return blob;
};

const AddPostForm = () => {
  const imageFileInputRef = useRef('');
  const [imageSrc, setImageSrc] = useState('');
  const [date, setDate] = useState('');
  const [personnel, setPersonnel] = useState(1);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  const selectedChannel = useRecoilValue(selectedChannelState);

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

    const binaryImage = imageSrc ? imageToBinary(imageSrc) : null;

    const travel_name = name;
    const travel_date = date;
    const travel_personnel = personnel;
    const travel_gender =
      gender === 'male' ? '남자만' : gender === 'female' ? '여자만' : '남여 무관';

    const userData = {
      title: `${travel_name}/${travel_date}/${travel_personnel}/${travel_gender}`,
      image: binaryImage,
      channelId: selectedChannel,
    };

    const formData = new FormData();
    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

    const { data } = await createPost(formData);
    console.log(data);
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
