import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getChannels } from '@/apis/post';
import Skeleton from '@/components/Common/Skeleton';
import { selectedChannelState } from '@/recoil/channelState';
import SortedChannels from './SortedChannels';
import { ChannelListContainer } from './style';

const ChannelList = () => {
  const setSelectedChannel = useSetRecoilState(selectedChannelState);

  const onClickChannel = (id: string) => {
    setSelectedChannel(id);
  };

  const { data: channels } = useQuery(['channelList'], getChannels);

  if (!channels) {
    return (
      <ChannelListContainer>
        {Array.from(Array(4), (_, i) => (
          <Skeleton.Paragraph line={4} style={{ padding: '10px' }} key={i} />
        ))}
      </ChannelListContainer>
    );
  }

  return (
    <ChannelListContainer>
      {channels && (
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
      )}
    </ChannelListContainer>
  );
};

export default ChannelList;
