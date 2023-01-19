import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchAll } from '../apis/search';
import { filterdPost } from '../utils/validate/searchedPostLIst';
import { encodeKeyword } from '../utils/validate/userList';
import useDebounce from './useDebounce';

const useSearchPost = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async (encodedKeyword, keyword) => {
    const { data } = await searchAll(encodedKeyword);
    setSearchResult(filterdPost(data, keyword));
  };

  const handleClickItem = (postId) => {
    navigate(`/p/${postId}`);
    setKeyword('');
  };

  useDebounce(
    () => {
      if (keyword.length > 0) {
        getSearchResult(encodeKeyword(keyword), keyword);
      } else {
        setSearchResult([]);
      }
    },
    300,
    [keyword]
  );

  return {
    keyword,
    searchResult,
    handleClickItem,
    setKeyword,
  };
};

export default useSearchPost;
