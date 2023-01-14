import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRecoilValue } from 'recoil';
import { selectedChannelState } from '../../../recoil/RecoilChannelState';
import { Channel, ChannelUl, DescriptionTitle, SortedChannelContainer } from './style';
const arrowStyle = { position: 'relative', top: '-2px', transition: 'transform 0.2s ease-out' };
const rotate = { transform: 'rotate(180deg)' };

const UpIcon = <KeyboardArrowUpIcon style={arrowStyle} />;
const BottomIcon = <KeyboardArrowUpIcon style={{ ...arrowStyle, ...rotate }} />;

const SortedChannels = ({ title, channels, onClickChannel }) => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const [fold, setFold] = useState(true);

  return (
    <SortedChannelContainer>
      <DescriptionTitle onClick={() => setFold((prev) => !prev)}>
        {fold ? UpIcon : BottomIcon}
        <span>{title}</span>
      </DescriptionTitle>
      <ChannelUl>
        {channels.map(({ name, _id }) => {
          const isClicked = selectedChannelId === _id;

          return (
            <Channel
              key={_id}
              onClick={() => onClickChannel(_id)}
              opacity={fold ? 0 : 1}
              isClicked={isClicked}
            >
              <span>{name}</span>
            </Channel>
          );
        })}
      </ChannelUl>
    </SortedChannelContainer>
  );
};

export default SortedChannels;
