import { LikeAndCommentContainer } from './style';

const LikeAndComment = ({ likeLength, commentLength }) => {
  return (
    <LikeAndCommentContainer>
      <div>좋아요 {likeLength}</div>
      <div>댓글 {commentLength}</div>
    </LikeAndCommentContainer>
  );
};

export default LikeAndComment;
