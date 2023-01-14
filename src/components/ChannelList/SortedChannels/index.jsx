import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectedChannelState } from '../../../recoil/channelState';
import { Channel, ChannelUl, DescriptionTitle, SortedChannelContainer } from './style';
import { useParams } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const arrowStyle = { position: 'relative', top: '-2px', transition: 'transform 0.2s ease-out' };
const rotate = { transform: 'rotate(180deg)' };

const UpIcon = <KeyboardArrowUpIcon style={arrowStyle} />;
const BottomIcon = <KeyboardArrowUpIcon style={{ ...arrowStyle, ...rotate }} />;

const SortedChannels = ({ title, channels, onClickChannel }) => {
  const useParamsId = useParams().id;
  const isFold = channels.filter(({ _id }) => _id === useParamsId).length === 0;
  const [fold, setFold] = useState(isFold);

  return (
    <SortedChannelContainer>
      <DescriptionTitle onClick={() => setFold((prev) => !prev)}>
        {fold ? UpIcon : BottomIcon}
        <span>{title}</span>
      </DescriptionTitle>
      <ChannelUl>
        {channels.map(({ name, _id }) => {
          const isClicked = useParamsId === _id;

          return (
            <Channel
              key={_id}
              onClick={() => onClickChannel(_id)}
              opacity={fold ? 0 : 1}
              isClicked={isClicked}
            >
              <Link to={_id}>
                <span>{name}</span>
              </Link>
            </Channel>
          );
        })}
      </ChannelUl>
    </SortedChannelContainer>
  );
};

export default SortedChannels;
