import styled from '@emotion/styled';
import UploadAndDisplayImage from '../../UploadImage';
import { useRecoilValue } from 'recoil';
import { uploadImageState } from '../../../recoil/uploadImage';
import { useCallback, useEffect, useState } from 'react';
import { updatePost } from '../../../apis/post';

const MyhomeModal = ({ postDetail, postId }) => {
  // postDetail 가지고 수정해줘야함

  const [detail, setDetailDate] = useState(postDetail);

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
    <div>
      <ModalLeft>
        <UploadAndDisplayImage />
      </ModalLeft>

      <ModalRight>
        <div>
          <ModalTitleWrapper>
            <ModalTitle>{profile[0]}</ModalTitle>
            <span>
              {profile[1]}/{profile[2]}
            </span>
          </ModalTitleWrapper>

          <form onSubmit={handleSendFileImage}>
            <div>
              <p style={{ fontWeight: 'bold' }}>날짜</p>
              <Input type="date" onChange={handleDay} />
            </div>

            <div>
              <p style={{ fontWeight: 'bold' }}>인원</p>
              <Input type="text" placeholder="인원을 입력해주세요" onChange={handlePerson} />
              <p style={{ fontWeight: 'bold' }}>원하는 성별</p>
              <select onChange={handleGender}>
                <option>=== 선택 ===</option>
                <option>남자만</option>
                <option>여자만</option>
                <option>남여무관</option>
              </select>
            </div>

            <div>
              <p style={{ fontWeight: 'bold' }}>제목</p>
              <Input type="text" placeholder="제목을 입력해주세요" onChange={handlePosterTitle} />
            </div>

            <button type="submit">확인</button>
          </form>
        </div>
      </ModalRight>
    </div>
  );
};

export default MyhomeModal;

const Input = styled.input`
  border: 1px solid black;
  width: 100%;
  height: 30px;
`;

const ModalRight = styled.div`
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
`;

const ModalLeft = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  box-sizing: border-box;
  border: 3px solid blue;
`;

const ModalTitleWrapper = styled.div``;
const ModalTitle = styled.h3``;
