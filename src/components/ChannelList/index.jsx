import useChannel from '../../hooks/useChannel';
import Skeleton from '../Common/Skeleton';
import SortedChannels from './SortedChannels';
import { ChannelListContainer } from './style';

const ChannelList = () => {
  const [channels, onClickChannel] = useChannel();

  return (
    <ChannelListContainer>
      {channels ? (
        <>
          <SortedChannels
            title="동유럽"
            channels={channels.eastEurope}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="서유럽"
            channels={channels.westEurope}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="남유럽"
            channels={channels.southEurope}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="북유럽"
            channels={channels.northEurope}
            onClickChannel={onClickChannel}
          />
        </>
      ) : (
        Array.from(Array(4), (_, i) => (
          <Skeleton.Paragraph line={4} style={{ padding: '10px' }} key={i} />
        ))
      )}
    </ChannelListContainer>
  );
};

export default ChannelList;
