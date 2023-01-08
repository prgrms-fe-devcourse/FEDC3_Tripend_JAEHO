import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getChannels } from '../../apis/post';

const ChannelList = () => {
  const [channels, setChannels] = useState();

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

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <ChannelListContainer>
      <ChannelDescription>
        <DescriptionTitle>동유럽</DescriptionTitle>
        {channels?.eastEurope.map(({ name }, i) => (
          <Channel key={i}>{name}</Channel>
        ))}
      </ChannelDescription>
      <ChannelDescription>
        <DescriptionTitle>서유럽</DescriptionTitle>
        {channels?.westEurope.map(({ name }, i) => (
          <Channel key={i}>{name}</Channel>
        ))}
      </ChannelDescription>
      <ChannelDescription>
        <DescriptionTitle>남유럽</DescriptionTitle>
        {channels?.southEurope.map(({ name }, i) => (
          <Channel key={i}>{name}</Channel>
        ))}
      </ChannelDescription>
      <ChannelDescription>
        <DescriptionTitle>북유럽</DescriptionTitle>
        {channels?.northEurope.map(({ name }, i) => (
          <Channel key={i}>{name}</Channel>
        ))}
      </ChannelDescription>
    </ChannelListContainer>
  );
};

export default ChannelList;

const ChannelListContainer = styled.div`
  width: 200px;
  border-right: 1px solid #000;
  padding: 20px 10px;
  overflow-y: scroll;
`;
const ChannelDescription = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 0;
`;
const DescriptionTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const Channel = styled.li`
  font-size: 15px;
  padding: 3px 0 3px 8px;
`;
