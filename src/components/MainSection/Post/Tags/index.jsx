import { TagContainer, Tag } from './style';

const Tags = ({ data, alignItem = 'center' }) => {
  const isObject = data.includes('{');

  let date;
  let personnel;
  let gender;

  if (isObject) {
    const TagData = JSON.parse(data);

    date = TagData.date;
    personnel = TagData.personnel;
    gender = TagData.gender;
  } else {
    [date, personnel, gender] = data.split('/').slice(1);
  }

  return (
    <TagContainer alignItem={alignItem}>
      <Tag>{date}</Tag>
      <Tag>{gender}</Tag>
      <Tag>{personnel}인</Tag>
    </TagContainer>
  );
};

export default Tags;
