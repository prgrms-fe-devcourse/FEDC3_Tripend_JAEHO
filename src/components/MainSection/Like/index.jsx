import useLike from '../../../hooks/useLike';
import { AccompanyButton, MyPost } from './style';

const Heart = ({ likes, author, postId }) => {
  const userId = localStorage.getItem('id');
  const [isLike, onClickLike] = useLike(postId, author, likes);

  return userId === author._id ? (
    <MyPost>내가 작성한 글입니다</MyPost>
  ) : (
    <div onClick={onClickLike}>
      {isLike ? (
        <AccompanyButton clicked={true}>동행 신청함</AccompanyButton>
      ) : (
        <AccompanyButton clicked={false}>동행 신청하기</AccompanyButton>
      )}
    </div>
  );
};

export default Heart;
