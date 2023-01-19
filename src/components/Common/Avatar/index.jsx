import styled from '@emotion/styled';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react';
import ImageComponent from '../Image';

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};
const AvatarWrapper = styled.div`
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
  placeholder,
  alt,
  mode = 'dover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
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
