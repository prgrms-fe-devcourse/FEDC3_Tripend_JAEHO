import useLike from '../../../hooks/useLike';
import { AccompaniedButton, AccompanyButton, MyPost } from './style';

const Heart = ({ likes, author, postId }) => {
  const userId = localStorage.getItem('id');
  const [isLike, onClickLike] = useLike(postId, author, likes);

  return userId === author._id ? (
    <MyPost>내가 작성한 글입니다</MyPost>
  ) : (
    <div onClick={onClickLike}>
      {isLike ? (
        <AccompaniedButton>동행 신청함</AccompaniedButton>
      ) : (
        <AccompanyButton>동행 신청하기</AccompanyButton>
      )}
    </div>
  );
};

export default Heart;
