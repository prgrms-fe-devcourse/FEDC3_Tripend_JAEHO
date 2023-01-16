import Avatar from '../../../common/Avatar';
import { AuthorInfoContainer, AuthorInfoTextContainer } from './style';

const AuthorInfo = ({ image, fullName }) => {
  if (fullName === null) {
    fullName = '임시/20대/남';
  }
  const [name, author_age, author_gender] = fullName.split('/');
  return (
    <AuthorInfoContainer>
      <Avatar shape="circle" size="40px" src={image} lazy={true} threshold={0.1} />
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
