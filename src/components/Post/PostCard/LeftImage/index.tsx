import { memo, CSSProperties } from 'react';
import Image from '@/components/Common/Image';
import { ImageContainer } from './style';

interface LeftImageProps {
  src: string;
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  style?: CSSProperties;
}

const LeftImage = ({ src, width, height }: LeftImageProps) => {
  return (
    <ImageContainer width={width} height={height}>
      <Image
        src={src}
        placeholder="https://via.placeholder.com/280x180"
        lazy={true}
        threshold={0.5}
        block={true}
      />
    </ImageContainer>
  );
};

export default memo(LeftImage, (prev, next) => prev.src === next.src);
