import Box from './Box';
import { SkeletonProps } from './type';

const Paragraph = ({ line = 3, ...props }: SkeletonProps) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <Box width="100%" height={16} key={index} />
        ) : (
          <Box width="64%" height={16} key={index} />
        )
      )}
    </div>
  );
};

export default Paragraph;
