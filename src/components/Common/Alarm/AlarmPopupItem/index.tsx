import { ALARM } from '@/utils/constants/alarm';
import { extractName } from '@/utils/validate/userList';
import Avatar from '@/components/Common/Avatar';
import { AlarmImg, AlarmItem, AlarmText } from './style';

interface AlarmPopupItem {
  alarm: string[];
  onClick: void;
}

const AlarmPopupItem = ({ alarm, onClick }: AlarmPopupItem) => {
  const { author } = alarm;
  const alarmCategory = alarm && alarm.comment ? ALARM.COMMENT : ALARM.ACCOMPANY;
  const filteredName = extractName.exec(author.fullName)[0];
  const alarmComment = `${filteredName}님이 회원님의 게시물에 ${alarmCategory} 남겼습니다`;

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
