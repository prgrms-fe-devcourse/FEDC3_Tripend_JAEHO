import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedChannelState } from '@/recoil/channelState';
import Skeleton from '@/components/Common/Skeleton';
import SortedChannels from './SortedChannels';
import { getChannels } from '@/apis/post';
import { ChannelListContainer } from './style';
import type { Channel, Channels } from '@/types/channel/channel.interface';

const ChannelList = () => {
  const [channels, setChannels] = useState<Channels>();
  const setSelectedChannel = useSetRecoilState(selectedChannelState);

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const { data }: { data: Channel[] } = await getChannels();

    const eastEurope = data.filter(({ description }) => description === '동유럽');
    const westEurope = data.filter(
      ({ description }: { description: string }) => description === '서유럽'
    );
    const southEurope = data.filter(
      ({ description }: { description: string }) => description === '남유럽'
    );
    const northEurope = data.filter(
      ({ description }: { description: string }) => description === '북유럽'
    );

    setChannels({
      eastEurope,
      westEurope,
      southEurope,
      northEurope,
    });
  };

  const onClickChannel = (id: string) => {
    setSelectedChannel(id);
  };

  return (
    <ChannelListContainer>
      {channels ? (
        <>
          <SortedChannels
            title="동유럽"
            channels={channels?.eastEurope}
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
