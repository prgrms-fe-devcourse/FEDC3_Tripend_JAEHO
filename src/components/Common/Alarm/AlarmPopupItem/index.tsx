import { MouseEventHandler } from 'react';
import Avatar from '@/components/Common/Avatar';
import { ALARM } from '@/utils/constants/alarm';
import { extractName } from '@/utils/validate/userList';
import { Alarm } from '../types';
import { AlarmImg, AlarmItem, AlarmText } from './style';
interface AlarmPopupItemProps extends Alarm {
  alarm: Alarm;
  onClick: MouseEventHandler<HTMLElement>;
}

const AlarmPopupItem = ({ alarm, onClick }: AlarmPopupItemProps) => {
  const { author } = alarm;
  const alarmCategory =
    alarm && alarm.comment ? ALARM.COMMENT : ALARM.ACCOMPANY;

  let result;
  let alarmComment = 'zz';

  if (author && author.fullName) {
    if ((result = extractName?.exec(author.fullName)) !== null) {
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
