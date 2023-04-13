import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedChannelState } from '../../recoil/channelState';
import Skeleton from '../Common/Skeleton';
import SortedChannels from './SortedChannels';
import { getChannels } from '../../apis/post';
import { ChannelListContainer } from './style';

const ChannelList = () => {
  const [channels, setChannels] = useState();
  const setSelectedChannel = useSetRecoilState(selectedChannelState);

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const { data } = await getChannels();

    const eastEurope = data.filter(({ description }) => description === '동유럽');
    const westEurope = data.filter(({ description }) => description === '서유럽');
    const southEurope = data.filter(({ description }) => description === '남유럽');
    const northEurope = data.filter(({ description }) => description === '북유럽');

    setChannels({
      eastEurope,
      westEurope,
      southEurope,
      northEurope,
    });
  };

  const onClickChannel = (id) => {
    setSelectedChannel(id);
  };

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
