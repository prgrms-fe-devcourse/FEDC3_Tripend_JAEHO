import React from 'react';
import { extractName } from '../../../utils/validate/userList';
import Avatar from '../../common/Avatar';
import { AlarmItem, AlarmImg, AlarmText } from './style';

const AlarmPopupItem = ({ author, onClick }) => {
  const alarmCategory = author && author.comments ? '댓글' : '좋아요';
  const filteredName = extractName.exec(author.fullName)[0];
  const alarmComment = `${filteredName}님이 회원님의 게시물에 ${alarmCategory}을 남겼습니다`;

  return (
    author && (
      <AlarmItem onClick={onClick}>
        <AlarmImg>
          <Avatar shape="circle" size={25} src={author.image} lazy={true} threshold={0.1} />
        </AlarmImg>
        <AlarmText>{alarmComment}</AlarmText>
      </AlarmItem>
    )
  );
};

export default AlarmPopupItem;
