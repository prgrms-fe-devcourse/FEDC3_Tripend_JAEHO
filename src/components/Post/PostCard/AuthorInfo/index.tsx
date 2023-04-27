import Avatar from '@/components/Common/Avatar';
import { AuthorInfoContainer, AuthorInfoTextContainer } from './style';

interface AuthorInfoProps {
  image: string;
  fullName: string;
}

const AuthorInfo = ({ image, fullName }: AuthorInfoProps) => {
  if (fullName === null) {
    fullName = '임시/20대/남';
  }
  const [name, author_age, author_gender] = fullName.split('/');
  return (
    <AuthorInfoContainer>
      <Avatar
        shape="circle"
        size="40px"
        src={image}
        lazy={true}
        threshold={0.1}
        alt="유저 이미지"
      />
      <AuthorInfoTextContainer>
        <div>{name}</div>
        <div>
          {author_age} / {author_gender}
        </div>
      </AuthorInfoTextContainer>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
