import { memo } from 'react';
import styled from '@emotion/styled';

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

export default memo(Title);

const Text = styled.h2`
  margin: 0;
  padding: 10px 3px;
  border-bottom: 1px solid;
`;
