import UploadAndDisplayImage from '../../UploadImage';

import { memo, useEffect, useState } from 'react';

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

import { useMyHomeModal } from '../../../hooks/useMyHomeModal';
import { InputsAlign, InputWrapper } from '../../AddPost/AddPostForm/style';

const MyhomeModal = memo(function ({ postId, imageValue }) {
  const {
    userLoginData,
    handleUserLoginData,
    handleSendFileImage,
    handlerCounter,
    myChannel,
    profile,
    dateError,
    europe,
    myId,
  } = useMyHomeModal(imageValue, postId);

  const selectList = ['여자만', '남자만', '남여 무관'];

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
          <InputWrapper>
            <label htmlFor="country">나라</label>
            <select id="country" name="channel" value={myId} onChange={handlerCounter}>
              <option value={null}>=== 선택 ===</option>
              <optgroup label="동유럽">
                {europe.eastEurope &&
                  europe.eastEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="서유럽">
                {europe.eastEurope &&
                  europe.westEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="남유럽">
                {europe.southEurope &&
                  europe.southEurope.map(({ name, _id }) => {
                    return (
                      <option value={_id} key={_id} data-country={name}>
                        {name}
                      </option>
                    );
                  })}
              </optgroup>

              <optgroup label="북유럽">
                {europe.northEurope &&
                  europe.northEurope.map(({ name, _id }) => {
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
                <option value={null}>=== 선택 ===</option>

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
