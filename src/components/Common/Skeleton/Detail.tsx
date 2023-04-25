import styled from '@emotion/styled';
import Box from './Box';
import { SkeletonProps } from './type';

const Detail = ({ line = 3, ...props }: SkeletonProps) => {
  return (
    <DetailContainer {...props}>
      <Box width="50%" height="100%" style={{ margin: '5px 0' }} />
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        {Array.from(Array(line), (_, index) =>
          index !== line - 1 ? (
            <Box width="100%" height={30} key={index} style={{ margin: '5px 0' }} />
          ) : (
            <Box width="64%" height={30} key={index} style={{ margin: '5px 0' }} />
          )
        )}
      </div>
    </DetailContainer>
  );
};

export default Detail;

export const DetailContainer = styled.div`
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
  border-radius: 16px;
  cursor: pointer;
`;
