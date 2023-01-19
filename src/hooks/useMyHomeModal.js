import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getMyPostDetail, updatePost } from '../apis/post';
import { myHomeModalState, userLoginDateState } from '../recoil/uploadImageState';
import { FORM_DATA } from '../utils/constants/myHome';

export const useMyHomeModal = (imageValue, postId) => {
  const detail = useRecoilValue(userLoginDateState);
  const setVisible = useSetRecoilState(myHomeModalState);

  const [prevDate, setPrevDate] = useState('');

  const [userLoginData, setUserLoginData] = useState({
    dayEnd: '',
    dayStart: '',
    person: '',
    gender: '',
    content: '',
    posterTitle: '',
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
    const getPostModalDetail = async () => {
      const getPostDetail = await getMyPostDetail(postId);

      if (getPostDetail.data.title) {
        const loginUserObject = JSON.parse(getPostDetail.data.title);

        setUserLoginData({
          ...userLoginData,
          dayEnd: loginUserObject.date.split(`~`)[1],
          dayStart: loginUserObject.date.split('~')[0],
          person: loginUserObject.personnel,
          gender: loginUserObject.gender,
          posterTitle: loginUserObject.title,
          content: loginUserObject.content,
        });
      }
    };

    getPostModalDetail();
  }, []);

  const handleSendFileImage = async (e) => {
    e.preventDefault();
    checkDate(userLoginData.dayEnd, userLoginData.dayStart);

    const jsonParseTitle = JSON.parse(detail.data.title);

    const title = {
      country: jsonParseTitle.country,
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
    formatData.append(FORM_DATA.CHANNEL_ID, detail.data._id);

    const res = await updatePost(formatData);
    setVisible(false);
  };

  return {
    userLoginData,
    handleUserLoginData,
    handleSendFileImage,
    profile,
    dateError,
  };
};
