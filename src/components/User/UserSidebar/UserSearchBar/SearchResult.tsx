import { getUserInfo } from '@/apis/user';
import Avatar from '@/components/Common/Avatar';
import { useQuery } from 'react-query';
import { SearchResultContainer, UserInfo, UserName } from './style';
import { memo } from 'react';
import { UserInfos } from '../type';

interface SearchResultProps {
  keyword: string;
}

const SearchResult = ({ keyword }: SearchResultProps) => {
  const { data: result, isLoading } = useQuery(['SearchResultData'], () => getUserInfo(keyword), {
    enabled: !!keyword,
  });

  if (isLoading) <>로딩중...</>;

  return (
    <SearchResultContainer>
      {result ? (
        <>
          {result.map((userInfo: UserInfos) => (
            <UserInfo key={userInfo._id}>
              <Avatar
                src={userInfo?.image}
                size="24px"
                lazy={true}
                threshold={0.5}
                shape="circle"
              />
              <UserName>{userInfo.fullName}</UserName>
            </UserInfo>
          ))}
        </>
      ) : (
        keyword.length > 0 && <>User does not exist!</>
      )}
    </SearchResultContainer>
  );
};

export default memo(SearchResult, (prev, next) => prev.keyword === next.keyword);
