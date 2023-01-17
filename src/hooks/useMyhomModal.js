import { useEffect, useState } from 'react';
import { getMyPostDetail, updatePost } from '../apis/post';
import { useRecoilState } from 'recoil';
import { myhomeModalState, userLoginDateState } from '../recoil/uploadImageState';
import { FORMATDATA } from '../utils/myhome/constant';

export const useMyhomModal = (imageValue, postId) => {
  const [detail, setPostDetail] = useRecoilState(userLoginDateState);
  const [visible, setVisible] = useRecoilState(myhomeModalState);

  const [userLoginData, setUserLoginData] = useState({
    dayEnd: '',
    dayStart: '',
    person: '',
    gender: '',
    content: '',
    posterTitle: '',
  });
  const [profile, setProfile] = useState([]);

  const handleUserLoginData = (e) => {
    const { name, value } = e.target;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (detail.data) {
      setProfile(detail.data.author.fullName.split('/'));
    }
    const getPostModalDetail = async () => {
      const getpostDetail = await getMyPostDetail(postId);

      if (getpostDetail.data.title) {
        const loginUserObject = JSON.parse(getpostDetail.data.title);

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

    formatData.append(FORMATDATA.POST_ID, postId);
    formatData.append(FORMATDATA.IMAGE, imageValue);
    formatData.append(FORMATDATA.TITLE, JSON.stringify(title));
    formatData.append(FORMATDATA.CHANNEL_ID, detail.data._id);

    const res = await updatePost(formatData);
    setVisible(false);
  };

  return {
    userLoginData,
    handleUserLoginData,
    handleSendFileImage,
    profile,
  };
};
