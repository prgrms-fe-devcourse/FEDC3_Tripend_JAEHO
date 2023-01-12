import Image from '../../../common/Image';
import { AuthorInfoContainer, AvatarWrapper } from './style';
import PersonIcon from '@mui/icons-material/Person';

const AuthorInfo = ({ image, fullName }) => {
  if (fullName === null) {
    fullName = '임시/20대/남';
  }
  const [name, author_age, author_gender] = fullName.split('/');
  return (
    <AuthorInfoContainer>
      <AvatarWrapper>
        {image ? (
          <Image
            src={image}
            width="100%"
            height="100%"
            style={{ borderRadius: '50%' }}
            lazy={true}
            threshold={0.5}
          />
        ) : (
          <PersonIcon
            style={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              fontSize: '35px',
              color: '#adadad',
            }}
          />
        )}
      </AvatarWrapper>
      <div>
        <div>{name}</div>
        <div>
          {author_age} / {author_gender}
        </div>
      </div>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
