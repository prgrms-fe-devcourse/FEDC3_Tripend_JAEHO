import styled from '@emotion/styled';
import { useEffect, useState, useCallback } from 'react';
import { getChannels } from '../../apis/post';
import SortedChannels from './SortedChannels';
import Skeleton from '../Skeleton';

const ChannelList = () => {
  const [channels, setChannels] = useState();
  const [foldList, setFoldList] = useState([true, true, true, true]);

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

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <ChannelListContainer>
      {channels ? (
        <>
          <SortedChannels
            title="동유럽"
            channels={channels.eastEurope}
            fold={foldList[0]}
            onClickFold={() => onClickFold(0)}
          />
          <SortedChannels
            title="서유럽"
            channels={channels.westEurope}
            fold={foldList[1]}
            onClickFold={() => onClickFold(1)}
          />
          <SortedChannels
            title="남유럽"
            channels={channels.westEurope}
            fold={foldList[2]}
            onClickFold={() => onClickFold(2)}
          />
          <SortedChannels
            title="북유럽"
            channels={channels.westEurope}
            fold={foldList[3]}
            onClickFold={() => onClickFold(3)}
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
    </ChannelListContainer>
  );
};

export default ChannelList;

const ChannelListContainer = styled.div`
  width: 200px;
  border-right: 1px solid #000;
  overflow-y: scroll;
`;
