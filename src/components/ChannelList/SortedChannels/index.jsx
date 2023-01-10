import * as style from './style';
import { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const arrowStyle = { position: 'relative', top: '-2px', transition: 'transform 0.2s ease-out' };
const rotate = { transform: 'rotate(90deg)' };

const RightIcon = <ArrowRightIcon style={arrowStyle} />;
const BottomIcon = <ArrowRightIcon style={{ ...arrowStyle, ...rotate }} />;

const SortedChannels = ({ title, channels, onClickChannel }) => {
  const [fold, setFold] = useState(true);

  return (
    <style.SortedChannelContainer>
      <style.DescriptionTitle onClick={() => setFold((prev) => !prev)}>
        {fold ? RightIcon : BottomIcon}
        <span>{title}</span>
      </style.DescriptionTitle>
      {channels.map(({ name, _id }) => (
        <style.Channel key={_id} onClick={() => onClickChannel(_id)} opacity={fold ? 0 : 1}>
          {name}
        </style.Channel>
      ))}
    </style.SortedChannelContainer>
  );
};

export default SortedChannels;
