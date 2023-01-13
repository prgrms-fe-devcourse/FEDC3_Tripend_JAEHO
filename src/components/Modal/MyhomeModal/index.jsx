import styled from '@emotion/styled';
import UploadAndDisplayImage from '../../UploadImage';
import { useRecoilValue } from 'recoil';
import { uploadImageState } from '../../../recoil/uploadImage';
import { useCallback, useState } from 'react';
import { updatePost } from '../../../apis/post';

const MyhomeModal = ({ postDetail, postId }) => {
  // postDetail 가지고 수정해줘야함
  const [detail, setDetailDate] = useState(postDetail);

  const imageValue = useRecoilValue(uploadImageState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');
  const [gender, setGender] = useState('');
  const [posterTitle, setPosterTitle] = useState('');

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
          <div>
            <h3>AR JaKir</h3>
            <span>20대 중반/남자</span>
          </div>

          <form onSubmit={handleSendFileImage}>
            <div>
              <p>날짜</p>
              <Input type="text" placeholder="날짜를 입력해주세요" onChange={handleDay} />
            </div>

            <div>
              <p>인원</p>
              <Input type="text" placeholder="인원을 입력해주세요" onChange={handlePerson} />
              <p>원하는 성별</p>
              <Input type="text" placeholder="원하는 성별 선택해주세요" onChange={handleGender} />
            </div>

            <div>
              <p>제목</p>
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
`;

const ModalRight = styled.div`
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
  border: 3px solid black;
`;

const ModalLeft = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  box-sizing: border-box;
  border: 3px solid blue;
`;
