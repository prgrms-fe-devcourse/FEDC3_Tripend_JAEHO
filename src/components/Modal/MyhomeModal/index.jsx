import styled from '@emotion/styled';
import UploadAndDisplayImage from '../../UploadImage';
import { useRecoilValue } from 'recoil';
import { formatDataState, uploadImageState } from '../../../recoil/uploadImage';
import { useState } from 'react';
import { updatePost } from '../../../apis/post';

const MyhomeModal = ({ postDetail, postId }) => {
  // postDetail 가지고 수정해줘야함

  const [detail, setDetailDate] = useState(postDetail);

  const imageValue = useRecoilValue(uploadImageState);

  const formatData = useRecoilValue(formatDataState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');
  const [man, setMan] = useState('');
  const [PosterTitle, setPosterTitle] = useState('');

  const [title, setTitle] = useState('');

  const [formImage, setFormImage] = useState('');

  const handlerDay = (e) => {
    setDay(e.target.value);
  };

  const handlerPerson = (e) => {
    setPerson(e.target.value);
  };

  const handlerMan = (e) => {
    setMan(e.target.value);
  };

  const handlePosterTitle = (e) => {
    setPosterTitle(e.target.value);
  };

  console.log(postDetail);
  // 수정할때 body에 들어가야함
  //     "postId": "63b9510e66dd96196cde83f0" // 완료
  //     "title": "seunghwan" // 완료
  //     "image":  null // 완료
  //     "channelId": "63b93c0935c05a12cd3da627" // 완료

  const sendFileImage = async (e) => {
    e.preventDefault();
    if (imageValue) {
      const str = `${PosterTitle} / ${day} / ${person} / ${man}`;
      console.log(postId);
      console.log(str);
      console.log(imageValue);
      console.log(detail.data.channel._id);
      const formatData = new FormData();

      formatData.append('postId', postId);
      formatData.append('image', imageValue);
      formatData.append('title', title);
      formatData.append('channelId', detail.data.channel._id);

      const res = await updatePost(formatData);
      if (res.status === 200) {
        alert('수정완료');
      }
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

          <form onSubmit={sendFileImage}>
            <div>
              <p>날짜</p>
              <Input type="text" placeholder="날짜를 입력해주세요" onChange={handlerDay} />
            </div>

            <div>
              <p>인원</p>
              <Input type="text" placeholder="인원을 입력해주세요" onChange={handlerPerson} />
              <p>원하는 성별</p>
              <Input type="text" placeholder="원하는 성별 선택해주세요" onChange={handlerMan} />
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

const ModalBlock = styled.div`
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &.openModal {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-bg-show 1s;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
