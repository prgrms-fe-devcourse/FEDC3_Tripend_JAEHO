import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchAll } from '@/apis/search';
import useDebounce from '@/hooks/useDebounce';
import { filteredPost } from '@/utils/validate/searchedPostLIst';
import { encodeKeyword } from '@/utils/validate/userList';
import {
  Description,
  SearchContainer,
  SearchInput,
  SearchResultItem,
  SearchResultList,
  SearchWrapper,
  Title,
} from './style';

interface SearchResult {
  _id: string;
  title: string;
  country: string;
}

const SearchPost = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const getSearchResult = async (encodedKeyword: string, keyword: string) => {
    const data = await searchAll(encodedKeyword);
    setSearchResult(filteredPost(data, keyword));
  };

  const handleClickItem = (postId: string) => {
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

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchIcon sx={{ color: '#d1d1d1' }} />
        <SearchInput
          value={keyword}
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchContainer>
      {searchResult && (
        <SearchResultList>
          {searchResult.map((item) => (
            <SearchResultItem key={item._id} onClick={() => handleClickItem(item._id)}>
              <Title>{item.title}</Title>
              <Description>{item.country}</Description>
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </SearchWrapper>
  );
};

export default SearchPost;
