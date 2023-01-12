import React from 'react';
import { extractName } from '../../../utils/validate/userList';
import { AlarmItem, AlarmImg, AlarmText } from './style';
const AlarmPopupItem = ({ alarm }) => {
  const { author } = alarm;
  const alarmCategory = author && author.comments ? '댓글' : '좋아요';
  const filteredName = extractName.exec(author.fullName)[0];
  const alarmComment = `${filteredName}님이 회원님의 게시물에 ${alarmCategory}를 남겼습니다`;

  const handleClickAlarm = () => {
    // 해당 id의 Post Detail Modal 띄우기
  };

  return (
    author && (
      <AlarmItem>
        <AlarmImg src={author.image} />
        <AlarmText>{alarmComment}</AlarmText>
      </AlarmItem>
    )
  );
};

export default AlarmPopupItem;
