import UploadAndDisplayImage from '../../UploadImage';

import { memo, useCallback, useEffect, useState } from 'react';
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
import { ERROR_MESSAGE, FORMATDATA } from '../../../utils/myhome/constant';
import { useRecoilState } from 'recoil';
import { userListState, userLoginDateState } from '../../../recoil/uploadImageState';

const MyhomeModal = memo(function ({ posts, postId, imageValue }) {
  const [imageSrc, setImageSrc] = useState('');

  const [detail, setPostDetail] = useRecoilState(userLoginDateState);
  const [list, setList] = useRecoilState(userListState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');
  const [gender, setGender] = useState('');
  const [posterTitle, setPosterTitle] = useState('');

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
      setList(posts);
    }
  }, []);

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

    const title = `${posterTitle} / ${day} / ${person} / ${gender}`;

    const formatData = new FormData();

    formatData.append(FORMATDATA.POST_ID, postId);
    formatData.append(FORMATDATA.IMAGE, imageValue);
    formatData.append(FORMATDATA.TITLE, title);
    formatData.append(FORMATDATA.CHANNEL_ID, detail.data._id);

    const res = await updatePost(formatData);

    // 수정 작업
    // setList({
    //   ...list,
    //
    //   data: {
    //     ...list,
    //     posts: list.map((post) => {
    //       if (post._id === res.data._id) {
    //         return {
    //           ...post,
    //           title: res.data.title,
    //           image: res.data.image,
    //         };
    //       }
    //     }),
    //   },
    // });
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
});

export default MyhomeModal;
