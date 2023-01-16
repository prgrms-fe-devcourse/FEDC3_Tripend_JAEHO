import UploadAndDisplayImage from '../../UploadImage';

import { memo, useCallback, useEffect, useState } from 'react';
import { getMyPostDetail, updatePost } from '../../../apis/post';
import {
  Button,
  ImageUploader,
  Input,
  InputDayWrapper,
  InputGenderWrapper,
  InputPersonWrapper,
  InputTitleWrapper,
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
import styled from '@emotion/styled';
import { InputsAlign } from '../../addPost/addPostForm/style';

const MyhomeModal = memo(function ({ posts, postId, imageValue }) {
  const [imageSrc, setImageSrc] = useState('');

  const [detail, setPostDetail] = useRecoilState(userLoginDateState);
  const [visible, setVisible] = useRecoilState(myhomeModalState);

  const [day, setDay] = useState('');
  const [person, setPerson] = useState('');

  const [posterTitle, setPosterTitle] = useState('');

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
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
          <UploadAndDisplayImage postId={postId} />
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
          <InputDayWrapper>
            <label htmlFor="date">기간</label>
            <InputsAlign>
              <input
                style={{
                  height: '30px',
                }}
                type="date"
                id="date"
              />
              부터
              <input
                style={{
                  height: '30px',
                }}
                type="date"
                id="date"
              />
              까지
            </InputsAlign>
          </InputDayWrapper>

          <div
            style={{
              display: 'flex',
            }}
          >
            <InputPersonWrapper
              style={{
                display: 'flex',
              }}
            >
              <Label htmlFor="text" style={{ fontWeight: 'bold' }}>
                인원
              </Label>
              <Input
                value={person}
                type="text"
                placeholder="인원을 입력해주세요"
                onChange={handlePerson}
              />
            </InputPersonWrapper>

            <InputGenderWrapper>
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
              </select>
            </InputGenderWrapper>
          </div>

          <InputTitleWrapper>
            <Label htmlFor="title" style={{ fontWeight: 'bold' }}>
              제목
            </Label>
            <Input
              style={{
                height: '40px',
              }}
              value={posterTitle}
              id="title"
              placeholder="제목을 입력해주세요"
              onChange={handlePosterTitle}
            />
          </InputTitleWrapper>

          <InputTitleWrapper>
            <Label htmlFor="content" style={{ fontWeight: 'bold' }}>
              내용
            </Label>
            <textarea
              style={{
                height: '60px',
                width: '100%',
                backgroundColor: '#fff',
                border: '1px solid #dddddd',
                borderRadius: '4px',
              }}
              id="content"
              placeholder="내용을 입력해주세요"
            />
          </InputTitleWrapper>
          <Button type="submit">확인</Button>
        </ModalForm>
      </ModalRight>
    </>
  );
});

export default MyhomeModal;
