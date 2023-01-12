import { SearchContainer, SearchInput } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchPost = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContainer>
      <SearchIcon sx={{ color: '#d1d1d1' }} />
      <SearchInput
        value={keyword}
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchPost;
