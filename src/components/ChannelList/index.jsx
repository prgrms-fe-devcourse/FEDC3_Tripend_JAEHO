import * as style from './style';
import { useEffect, useState, useCallback } from 'react';
import { getChannels } from '../../apis/post';
import SortedChannels from './SortedChannels';
import Skeleton from '../Skeleton';
import { useSetRecoilState } from 'recoil';
import { selectedChannelState } from '../../utils/channelState';

const ChannelList = () => {
  const [channels, setChannels] = useState();
  const [foldList, setFoldList] = useState([true, true, true, true]);
  const setSelectedChannel = useSetRecoilState(selectedChannelState);

  const getChannelData = async () => {
    const response = await getChannels();

    const eastEurope = response.filter(({ description }) => description === '동유럽');
    const westEurope = response.filter(({ description }) => description === '서유럽');
    const southEurope = response.filter(({ description }) => description === '남유럽');
    const northEurope = response.filter(({ description }) => description === '북유럽');

    setChannels({
      eastEurope,
      westEurope,
      southEurope,
      northEurope,
    });
  };

  const onClickFold = useCallback(
    (i) => {
      setFoldList(foldList.map((data, n) => (n === i ? !data : data)));
    },
    [foldList]
  );

  const onClickChannel = (id) => {
    setSelectedChannel(id);
  };

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <style.ChannelListContainer>
      {channels ? (
        <>
          <SortedChannels
            title="동유럽"
            channels={channels.eastEurope}
            fold={foldList[0]}
            onClickFold={() => onClickFold(0)}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="서유럽"
            channels={channels.westEurope}
            fold={foldList[1]}
            onClickFold={() => onClickFold(1)}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="남유럽"
            channels={channels.southEurope}
            fold={foldList[2]}
            onClickFold={() => onClickFold(2)}
            onClickChannel={onClickChannel}
          />
          <SortedChannels
            title="북유럽"
            channels={channels.northEurope}
            fold={foldList[3]}
            onClickFold={() => onClickFold(3)}
            onClickChannel={onClickChannel}
          />
        </>
      ) : (
        <>
          <Skeleton.Paragraph line={4} style={{ paddingBottom: '10px' }} />
          <Skeleton.Paragraph line={4} style={{ paddingBottom: '10px' }} />
          <Skeleton.Paragraph line={4} style={{ paddingBottom: '10px' }} />
          <Skeleton.Paragraph line={4} style={{ paddingBottom: '10px' }} />
        </>
      )}
    </style.ChannelListContainer>
  );
};

export default ChannelList;
