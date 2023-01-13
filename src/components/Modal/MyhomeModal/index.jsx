import UploadAndDisplayImage from '../../UploadImage';
import { useRecoilValue } from 'recoil';
import { uploadImageState } from '../../../recoil/uploadImage';
import { useCallback, useEffect, useState } from 'react';
import { updatePost } from '../../../apis/post';
import {
  Button,
  ImageUploader,
  Input,
  Label,
  ModalForm,
  ModalLeft,
  ModalRight,
  ModalTitle,
  ModalTitleWrapper,
} from './style';

const MyhomeModal = ({ postDetail, postId }) => {
  // postDetail 가지고 수정해줘야함
  const [detail, setDetailDate] = useState(postDetail);
  const [imageSrc, setImageSrc] = useState('');
  const imageValue = useRecoilValue(uploadImageState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');
  const [gender, setGender] = useState('');
  const [posterTitle, setPosterTitle] = useState('');

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
    }
  }, []);

  console.log(profile);

  const handleDay = useCallback(
    (e) => {
      setDay(e.target.value);
    },
    [day]
  );

  const handlePerson = useCallback(
    (e) => {
      setPerson(e.target.value);
    },
    [person]
  );

  const handleGender = useCallback(
    (e) => {
      setGender(e.target.value);
    },
    [gender]
  );

  const handlePosterTitle = useCallback(
    (e) => {
      setPosterTitle(e.target.value);
    },
    [posterTitle]
  );

  const handleSendFileImage = async (e) => {
    e.preventDefault();
    if (imageValue) {
      const str = `${posterTitle} / ${day} / ${person} / ${gender}`;

      const formatData = new FormData();

      formatData.append('postId', postId);
      formatData.append('image', imageValue);
      formatData.append('title', str);
      formatData.append('channelId', detail.data.channel._id);

      await updatePost(formatData);
    } else {
      swal('사진을 업로드해주세요');
    }
  };

  return (
    <>
      <ModalLeft>
        <ImageUploader>
          <UploadAndDisplayImage />
        </ImageUploader>
      </ModalLeft>

      <ModalRight>
        <ModalTitleWrapper>
          <ModalTitle>{profile[0]}</ModalTitle>
          <span>
            {profile[1]}/{profile[2]}
          </span>
        </ModalTitleWrapper>

        <ModalForm onSubmit={handleSendFileImage}>
          <Label htmlFor="date" style={{ fontWeight: 'bold' }}>
            날짜
          </Label>
          <Input type="date" onChange={handleDay} />

          <Label htmlFor="text" style={{ fontWeight: 'bold' }}>
            인원
          </Label>
          <Input type="text" placeholder="인원을 입력해주세요" onChange={handlePerson} />
          <Label style={{ fontWeight: 'bold' }}>원하는 성별</Label>
          <select
            style={{
              borderRadius: '5px',
              width: '100%',
              height: '40px',
            }}
            onChange={handleGender}
          >
            <option>=== 선택 ===</option>
            <option>남자만</option>
            <option>여자만</option>
            <option>남여무관</option>
          </select>

          <Label htmlFor="text" style={{ fontWeight: 'bold' }}>
            제목
          </Label>
          <Input type="text" placeholder="제목을 입력해주세요" onChange={handlePosterTitle} />

          <Button type="submit">확인</Button>
        </ModalForm>
      </ModalRight>
    </>
  );
};

export default MyhomeModal;
