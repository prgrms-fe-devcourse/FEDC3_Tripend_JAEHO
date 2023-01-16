import { Tag, TagContainer } from './style';

const Tags = ({ date, gender, personnel, alignItem = 'center' }) => {
  return (
    <TagContainer alignItem={alignItem}>
      <Tag>{date}</Tag>
      <Tag>{gender}</Tag>
      <Tag>{personnel}인</Tag>
    </TagContainer>
  );
};

export default Tags;
