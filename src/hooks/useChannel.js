import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { getChannels } from '../apis/post';
import { selectedChannelState } from '../recoil/channelState';

const useChannel = () => {
  const [channels, setChannels] = useState();

  const setSelectedChannel = useSetRecoilState(selectedChannelState);

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

  useEffect(() => {
    getChannelData();
  }, []);

  return [channels, onClickChannel];
};

export default useChannel;
