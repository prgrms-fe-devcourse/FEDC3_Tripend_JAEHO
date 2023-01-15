import UploadAndDisplayImage from '../../UploadImage';

import { memo, useCallback, useEffect, useState } from 'react';
import { getMyPostDetail, updatePost } from '../../../apis/post';
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
import {
  myhomeModalState,
  userListState,
  userLoginDateState,
} from '../../../recoil/uploadImageState';

const MyhomeModal = memo(function ({ posts, postId, imageValue }) {
  const [imageSrc, setImageSrc] = useState('');

  const [detail, setPostDetail] = useRecoilState(userLoginDateState);
  const [list, setList] = useRecoilState(userListState);
  const [visible, setVisible] = useRecoilState(myhomeModalState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');

  const [posterTitle, setPosterTitle] = useState('');

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
      setList(posts);
    }
    const getPostModalDetail = async () => {
      const getpostDetail = await getMyPostDetail(postId);

      if (getpostDetail.data.title) {
        let str = getpostDetail.data.title.split('/');

        str = str.toString().replace(/(\s*)/g, '');

        setPosterTitle(str.split(',')[0]);
        setDay(str.split(',')[1]);
        setPerson(str.split(',')[2]);
        setGender(str.split(',')[3]);
      }
    };

    getPostModalDetail();
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
  const [gender, setGender] = useState('');

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

    console.log(gender);

    formatData.append(FORMATDATA.POST_ID, postId);
    formatData.append(FORMATDATA.IMAGE, imageValue);
    formatData.append(FORMATDATA.TITLE, title);
    formatData.append(FORMATDATA.CHANNEL_ID, detail.data._id);

    const res = await updatePost(formatData);
    setVisible(false);
  };

  const selectList = ['여자만', '남자만', '남여무관'];

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
          <Input value={day.trim()} type="date" onChange={handleDay} />

          <Label htmlFor="text" style={{ fontWeight: 'bold' }}>
            인원
          </Label>
          <Input
            value={person}
            type="text"
            placeholder="인원을 입력해주세요"
            onChange={handlePerson}
          />
          <Label style={{ fontWeight: 'bold' }}>원하는 성별</Label>
          <select
            value={gender}
            style={{
              borderRadius: '5px',
              width: '100%',
              height: '40px',
            }}
            onChange={handleGender}
          >
            <option>=== 선택 ===</option>

            {selectList.map((item, index) => {
              return (
                (item.trim() === '남자만' && (
                  <option value={item} key={index}>
                    {'남자만'}
                  </option>
                )) ||
                (item.trim() === '여자만' && (
                  <option value={item} key={index}>
                    {'여자만'}
                  </option>
                )) ||
                (item.trim() === '남여무관' && <option key={index}>{'남여무관'}</option>)
              );
            })}
            {/*<option value={gender.trim() === '남자만'}>남자만</option>*/}
            {/*<option value={gender.trim() === '여자만'}>여자만</option>*/}
            {/*<option value={gender.trim() === '남여무관'}>남여무관</option>*/}
          </select>

          <Label htmlFor="text" style={{ fontWeight: 'bold' }}>
            제목
          </Label>
          <Input
            value={posterTitle}
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={handlePosterTitle}
          />

          <Button type="submit">확인</Button>
        </ModalForm>
      </ModalRight>
    </>
  );
});

export default MyhomeModal;
