import UploadAndDisplayImage from '@/components/Post/PostCreate/UploadImage';

import { getChannels, getMyPostDetail, updatePost } from '@/apis/post';
import { InputWrapper, InputsAlign } from '@/components/Post/PostCreate/AddPostForm/style';
import { myHomeModalState, uploadImageState } from '@/recoil/uploadImageState';
import { FORM_DATA } from '@/utils/constants/user';
import { memo, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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

interface myhomeModalProps {
  postId: string;
}

const MyhomeModal = memo(({ postId }: myhomeModalProps) => {
  const { isLoading } = useQuery(['userPostDetailData'], () => getMyPostDetail(postId), {
    enabled: !!postId,
    onSuccess: (data) => {
      //setSelectedImage(data.image);
      setProfile(data.author.fullName.split('/'));

      if (data.title) {
        const loginUserObject = JSON.parse(data.title);

        setMyChannel(loginUserObject.country);
        setMyId(data.channel._id);
        setUserLoginData({
          ...userLoginData,
          country: loginUserObject.country,
          dayEnd: loginUserObject.date.split(`~`)[1],
          dayStart: loginUserObject.date.split('~')[0],
          person: loginUserObject.personnel,
          gender: loginUserObject.gender,
          posterTitle: loginUserObject.title,
          content: loginUserObject.content,
          channel: data.channel._id,
          image: data.image,
        });
      }
    },
  });

  const { data: channels } = useQuery(['channelList'], getChannels);

  const setVisible = useSetRecoilState(myHomeModalState);

  const [userLoginData, setUserLoginData] = useState({
    dayEnd: '',
    dayStart: '',
    person: '',
    gender: '',
    content: '',
    posterTitle: '',
    country: '',
    channel: '',
    image: '',
  });

  const [myChannel, setMyChannel] = useState('');
  const [myId, setMyId] = useState('');
  const [profile, setProfile] = useState<string[]>([]);
  const [dateError, setDateError] = useState('');
  const selectedImage = useRecoilValue<any | null>(uploadImageState);

  const handleUserLoginData = (e: any) => {
    const { name, value } = e.target;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
  };

  const handlerCounter = (e: any) => {
    setMyChannel(e.target.options[e.target.selectedIndex].dataset.country);
    setMyId(e.target.options[e.target.selectedIndex].value);
  };

  const checkDate = (end: string, start: string) => {
    const endDate = parseInt(end.split('-').join('').trim());
    const startDate = parseInt(start.split('-').join('').trim());

    if (startDate > endDate) {
      setDateError('기간을 정확히 맞춰주세요');
      throw new Error('에러');
    }
  };

  const handleSendFileImage = async (e: any) => {
    e.preventDefault();
    checkDate(userLoginData.dayEnd, userLoginData.dayStart);

    const title = {
      country: myChannel,
      date: `${userLoginData.dayStart}~${userLoginData.dayEnd}`,
      personnel: userLoginData.person,
      gender: userLoginData.gender,
      title: userLoginData.posterTitle,
      content: userLoginData.content,
    };

    const formatData = new FormData();

    formatData.append(FORM_DATA.POST_ID, postId);
    formatData.append(FORM_DATA.IMAGE, JSON.stringify(selectedImage));
    formatData.append(FORM_DATA.TITLE, JSON.stringify(title));
    formatData.append(FORM_DATA.CHANNEL_ID, myId);

    await updatePost(formatData);

    setVisible(false);
  };

  const selectList = ['여자만', '남자만', '남여 무관'];

  if (isLoading) return <>로딩중...</>;

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
          <InputWrapper>
            <label htmlFor="country">나라</label>
            <select id="country" name="channel" value={myId} onChange={handlerCounter}>
              <option>=== 선택 ===</option>
              <optgroup label="동유럽">
                {channels?.eastEurope &&
                  channels.eastEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="서유럽">
                {channels?.westEurope &&
                  channels.westEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="남유럽">
                {channels?.southEurope &&
                  channels.southEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="북유럽">
                {channels?.northEurope &&
                  channels.northEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>
            </select>
          </InputWrapper>
          <InputDayWrapper>
            <label htmlFor="date">기간</label>
            <InputsAlign>
              <input
                type="date"
                id="date"
                name="dayStart"
                value={userLoginData.dayStart.trim()}
                onChange={handleUserLoginData}
              />
              ~
              <input
                style={{
                  height: '30px',
                }}
                type="date"
                id="date"
                name="dayEnd"
                value={userLoginData.dayEnd.trim()}
                onChange={handleUserLoginData}
              />
            </InputsAlign>
            <p>{dateError}</p>
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
                value={userLoginData.person}
                name="person"
                type="text"
                placeholder="인원을 입력해주세요"
                onChange={handleUserLoginData}
              />
            </InputPersonWrapper>

            <InputGenderWrapper>
              <Label style={{ fontWeight: 'bold' }}>원하는 성별</Label>
              <select
                name="gender"
                value={userLoginData.gender}
                style={{
                  borderRadius: '5px',
                  width: '100%',
                  height: '40px',
                }}
                onChange={handleUserLoginData}
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
                    (item.trim() === '남여 무관' && (
                      <option value={item} key={index}>
                        {'남여 무관'}
                      </option>
                    ))
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
              value={userLoginData.posterTitle}
              name="posterTitle"
              id="title"
              placeholder="제목을 입력해주세요"
              onChange={handleUserLoginData}
            />
          </InputTitleWrapper>
          <InputTitleWrapper>
            <Label htmlFor="content" style={{ fontWeight: 'bold' }}>
              내용
            </Label>
            <textarea
              id="content"
              name="content"
              placeholder="내용을 입력해주세요"
              value={userLoginData.content}
              onChange={handleUserLoginData}
            />
          </InputTitleWrapper>
          <Button type="submit">확인</Button>
        </ModalForm>
      </ModalRight>
    </>
  );
});

export default MyhomeModal;
