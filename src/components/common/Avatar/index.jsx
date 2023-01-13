import ImageComponent from '../Image';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';

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
`;
const Avatar = ({
  lazy,
  threshold,
  src,
  size = '70px',
  shape = 'circle', // round, sqare 등이 있음
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
