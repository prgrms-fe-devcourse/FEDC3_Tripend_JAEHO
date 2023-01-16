import { useState } from 'react';
import { getUserInfo } from '../apis/user';
import { encodeKeyword } from '../utils/validate/userList';
import useDebounce from './useDebounce';

const useGetUserInfo = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);

  console.log('keyword', keyword);

  const getUserInfoData = async (encodedKeyword) => {
    const { data } = await getUserInfo(encodedKeyword);
    setResult(data);
  };

  useDebounce(
    () => {
      if (keyword !== '') {
        getUserInfoData(encodeKeyword(keyword));
      } else setResult([]);
    },
    300,
    [keyword]
  );

  return {
    keyword,
    getUserInfoData,
    setKeyword,
    result,
  };
};
export default useGetUserInfo;
