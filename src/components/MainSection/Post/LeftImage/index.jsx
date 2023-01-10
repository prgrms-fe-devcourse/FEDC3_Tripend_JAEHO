import { ImageContainer } from './style';
import Image from '../../../common/Image';

const LeftImage = ({ src, size, style }) => {
  return (
    <ImageContainer>
      <Image
        src={src ? src : 'https://via.placeholder.com/280x180'}
        width={size}
        height={size}
        style={style}
        lazy={true}
        threshold={0.5}
      />
    </ImageContainer>
  );
};

export default LeftImage;
