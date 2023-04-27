import { CSSProperties, HTMLAttributes, useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ImageComponent from '../Image';
import styled from '@emotion/styled';

interface AvatarWrapperProps {
  shape: 'circle' | 'round' | 'square';
  size?: CSSProperties['width' | 'height'];
}

interface AvatarProps extends AvatarWrapperProps {
  lazy: boolean;
  threshold?: number | number[];
  src: string;
  placeholder?: string;
  alt: string;
  mode?: CSSProperties['objectFit'];
  props?: HTMLAttributes<HTMLDivElement>;
}

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  > img {
    transition: opacity 0.2s ease-out;
  }
  color: #adadad;
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = '70px',
  shape = 'circle',
  placeholder = 'https://ionicframework.com/docs/img/demos/avatar.svg',
  alt,
  mode = 'cover',
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    if (src !== undefined) {
      image.src = src;
      image.onload = () => setLoaded(true);
    }
  });

  return (
    <AvatarWrapper {...props} shape={shape} size={size}>
      {src ? (
        <ImageComponent
          block
          lazy={lazy}
          threshold={threshold}
          width={size}
          height={size}
          src={src}
          placeholder={placeholder}
          alt={alt}
          mode={mode}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      ) : (
        <PersonIcon
          style={{
            fontSize: size,
            color: '#adadad',
          }}
        />
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
