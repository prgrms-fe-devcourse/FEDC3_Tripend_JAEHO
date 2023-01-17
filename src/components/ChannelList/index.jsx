import { useEffect, useState } from 'react';
import { getChannels } from '../../apis/post';
import SortedChannels from './SortedChannels';
import Skeleton from '../common/Skeleton';
import { useSetRecoilState } from 'recoil';
import { selectedChannelState } from '../../recoil/channelState';
import { ChannelListContainer } from './style';
import useChannel from '../../hooks/useChannel';

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
