import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getChannels, getMyPostDetail, updatePost } from '../apis/post';
import { myHomeModalState, userLoginDateState } from '../recoil/uploadImageState';
import { FORM_DATA } from '../utils/constants/myHome';

export const useMyHomeModal = (imageValue, postId) => {
  const detail = useRecoilValue(userLoginDateState);
  const setVisible = useSetRecoilState(myHomeModalState);

  const [userLoginData, setUserLoginData] = useState({
    dayEnd: '',
    dayStart: '',
    person: '',
    gender: '',
    content: '',
    posterTitle: '',
    country: '',
    channel: '',
  });

  const [channel, setChannel] = useState('');
  //////////////////////////////////////////////////////
  const [myChannel, setMyChannel] = useState('');
  const [myId, setMyId] = useState('');

  const [europe, setEurope] = useState({
    eastEurope: [],
    westEurope: [],
    southEurope: [],
    northEurope: [],
  });

  const [profile, setProfile] = useState([]);

  const [dateError, setDateError] = useState('');

  const handleUserLoginData = (e) => {
    const { name, value } = e.target;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
  };

  const handlerCounter = (e) => {
    setMyChannel(e.target.options[e.target.selectedIndex].dataset.country);
    setMyId(e.target.options[e.target.selectedIndex].value);
  };

  const checkDate = (end, start) => {
    const endDate = parseInt(end.split('-').join('').trim());
    const startDate = parseInt(start.split('-').join('').trim());

    if (startDate > endDate) {
      setDateError('기간을 정확히 맞춰주세요 ㅠㅠ');
      throw new Error('에러');
    }
  };

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
    }
    // 데이터 가져오는 함수
    const getPostModalDetail = async () => {
      const getPostDetail = await getMyPostDetail(postId);

      if (getPostDetail.data.title) {
        const loginUserObject = JSON.parse(getPostDetail.data.title);

        setMyChannel(loginUserObject.country);
        setMyId(getPostDetail.data.channel._id);
        setUserLoginData({
          ...userLoginData,
          country: loginUserObject.country,
          dayEnd: loginUserObject.date.split(`~`)[1],
          dayStart: loginUserObject.date.split('~')[0],
          person: loginUserObject.personnel,
          gender: loginUserObject.gender,
          posterTitle: loginUserObject.title,
          content: loginUserObject.content,
          channel: getPostDetail.data.channel._id,
        });
      }
    };

    // 나라 선택해서 데이터 보내는 함수
    const getChannel = async () => {
      const { data } = await getChannels();
      const eastEurope = data.filter(({ description }) => description === '동유럽');
      const westEurope = data.filter(({ description }) => description === '서유럽');
      const southEurope = data.filter(({ description }) => description === '남유럽');
      const northEurope = data.filter(({ description }) => description === '북유럽');

      setEurope({
        eastEurope,
        westEurope,
        southEurope,
        northEurope,
      });
    };
    getChannel();
    getPostModalDetail();
  }, []);

  const handleSendFileImage = async (e) => {
    e.preventDefault();
    checkDate(userLoginData.dayEnd, userLoginData.dayStart);

    const jsonParseTitle = JSON.parse(detail.data.title);

    const title = {
      country: myChannel,
      date: `${userLoginData.dayStart}~${userLoginData.dayEnd}`,
      personnel: userLoginData.person,
      gender: userLoginData.gender,
      title: userLoginData.posterTitle,
      content: userLoginData.content,
    };

    const formatData = new FormData();

    formatData.append(FORM_DATA.POST_ID, postId);
    formatData.append(FORM_DATA.IMAGE, imageValue);
    formatData.append(FORM_DATA.TITLE, JSON.stringify(title));
    formatData.append(FORM_DATA.CHANNEL_ID, myId);
    const res = await updatePost(formatData);
    setVisible(false);
  };

  return {
    userLoginData,
    handleUserLoginData,
    handleSendFileImage,
    handlerCounter,
    profile,
    dateError,
    myChannel,
    europe,
    myId,
  };
};
