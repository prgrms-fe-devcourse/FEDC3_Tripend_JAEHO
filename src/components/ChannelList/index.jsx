import styled from '@emotion/styled';
import { memo, useEffect, useState } from 'react';
import { getChannels } from '../../apis/post';
import Skeleton from '../Skeleton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCallback } from 'react';
import SortedChannel from './SortedChannel';

const arrowStyle = { position: 'relative', top: '4px' };
const RightIcon = <ArrowRightIcon style={arrowStyle} />;
const BottomIcon = <ArrowDropDownIcon style={arrowStyle} />;

const ChannelList = () => {
  const [channels, setChannels] = useState();
  const [fold, setFold] = useState([true, true, true, true]);

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
      const newFoldState = [...fold];
      newFoldState[i] = !newFoldState[i];
      setFold([...newFoldState]);
    },
    [fold]
  );

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <ChannelListContainer>
      <Title>여행지 목록</Title>
      {channels ? (
        <>
          <SortedChannel
            title="동유럽"
            channels={channels.eastEurope}
            fold={fold[0]}
            onClickFold={() => onClickFold(0)}
          />
          <SortedChannel
            title="서유럽"
            channels={channels.westEurope}
            fold={fold[1]}
            onClickFold={() => onClickFold(1)}
          />
          <SortedChannel
            title="남유럽"
            channels={channels.westEurope}
            fold={fold[2]}
            onClickFold={() => onClickFold(2)}
          />
          <SortedChannel
            title="북유럽"
            channels={channels.westEurope}
            fold={fold[3]}
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
const Title = styled.h2`
  margin: 0;
  padding: 10px 3px;
  border-bottom: 1px solid;
`;
