import Avatar from '@/components/Common/Avatar';
import { ALARM } from '@/utils/constants/alarm';
import { extractName } from '@/utils/validate/userList';
import { MouseEventHandler } from 'react';
import { AlarmImg, AlarmItem, AlarmText } from './style';

interface AlarmPopupItem extends Alarm {
  alarm: Alarm;
  onClick: MouseEventHandler<HTMLElement>;
}

interface Alarm extends Author {
  _id?: string;
  post?: string;
  author?: Author | undefined;
  comment?: string;
}

interface Author {
  fullName?: string;
  image?: string;
}

const AlarmPopupItem = ({ alarm, onClick }: AlarmPopupItem) => {
  const { author } = alarm;
  const alarmCategory = alarm && alarm.comment ? ALARM.COMMENT : ALARM.ACCOMPANY;

  let result;
  let alarmComment;

  if (author && author.fullName) {
    while ((result = extractName?.exec(author.fullName)) !== null) {
      alarmComment = `${result[0]}님이 회원님의 게시물에 ${alarmCategory} 남겼습니다`;
    }
  }

  return author ? (
    <AlarmItem onClick={onClick}>
      <AlarmImg>
        <Avatar
          shape="circle"
          size={25}
          src={author.image}
          lazy={true}
          threshold={0.1}
          placeholder=""
          alt=""
          mode={undefined}
        />
      </AlarmImg>
      <AlarmText>{alarmComment}</AlarmText>
    </AlarmItem>
  ) : (
    <></>
  );
};

export default AlarmPopupItem;
