import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Channel } from '@/types/channel/channel.interface';
import {
  ChannelItem,
  ChannelUl,
  Description,
  DescriptionTitle,
  Icon,
  SortedChannelContainer,
} from './style';

interface SortedChannelsProps {
  title: string;
  channels: Channel[];
  onClickChannel: (channelId: string) => void;
}

const SortedChannels = ({
  title,
  channels,
  onClickChannel,
}: SortedChannelsProps) => {
  const useParamsId = useParams().id;
  const isFold = channels.filter(({ _id }) => _id === useParamsId).length === 0;
  const [fold, setFold] = useState(isFold || false);

  return (
    <SortedChannelContainer>
      <Description onClick={() => setFold((prev) => !prev)}>
        <Icon $transform={fold}>
          <KeyboardArrowDown />
        </Icon>
        <DescriptionTitle>{title}</DescriptionTitle>
      </Description>
      <ChannelUl>
        {channels.map(({ name, _id }) => (
          <ChannelItem
            key={_id}
            onClick={() => onClickChannel(_id)}
            opacity={fold ? 0 : 1}
            isClicked={useParamsId === _id}
          >
            <Link to={_id}>
              <span>{name}</span>
            </Link>
          </ChannelItem>
        ))}
      </ChannelUl>
    </SortedChannelContainer>
  );
};

export default SortedChannels;
