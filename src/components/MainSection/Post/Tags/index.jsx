import { TagContainer, Tag } from './style';

const Tags = ({ title, alignItem = 'center' }) => {
  const [_, date, personnel, gender] = title.split('/');
  return (
    <TagContainer alignItem={alignItem}>
      <Tag>{date}</Tag>
      <Tag>{gender}</Tag>
      <Tag>{personnel}인</Tag>
    </TagContainer>
  );
};

export default Tags;
