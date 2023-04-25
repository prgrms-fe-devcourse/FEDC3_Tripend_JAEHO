import styled from '@emotion/styled';
import Box from './Box';
import { SkeletonProps } from './type';

const Card = ({ line = 3, ...props }: SkeletonProps) => {
  return (
    <CardContainer {...props}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <Box width="100%" height={30} key={index} style={{ margin: '5px 0' }} />
        ) : (
          <Box width="64%" height={30} key={index} style={{ margin: '5px 0' }} />
        )
      )}
    </CardContainer>
  );
};

export default Card;

export const CardContainer = styled.div`
  height: 180px;
  padding: 20px;
  margin: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  background-color: var(--gray);
  cursor: pointer;
`;
