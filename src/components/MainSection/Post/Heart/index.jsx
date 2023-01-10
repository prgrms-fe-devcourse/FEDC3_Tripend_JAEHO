import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Heart = ({ likes, userId, styleProps }) => {
  const likesUserList = likes.filter(({ user }) => user === userId).length > 0;

  return likesUserList ? (
    <FavoriteIcon style={{ color: 'red', ...styleProps }} />
  ) : (
    <FavoriteBorderIcon style={{ color: 'red', ...styleProps }} />
  );
};

export default Heart;
