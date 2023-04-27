import { CSSProperties } from 'react';
import { Tag, TagContainer } from './style';

interface TagsProps {
  date: string;
  gender: string;
  personnel: string;
  alignItem?: CSSProperties['alignItems'];
}

const Tags = ({ date, gender, personnel, alignItem = 'center' }: TagsProps) => {
  return (
    <TagContainer alignItem={alignItem}>
      <Tag>{date}</Tag>
      <Tag>{gender}</Tag>
      <Tag>{personnel}인</Tag>
    </TagContainer>
  );
};

export default Tags;
