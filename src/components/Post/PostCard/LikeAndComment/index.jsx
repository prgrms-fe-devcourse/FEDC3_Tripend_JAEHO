import { LikeAndCommentContainer } from './style';

const LikeAndComment = ({ likeLength, commentLength }) => {
  return (
    <LikeAndCommentContainer>
      <div>동행 신청 {likeLength} </div>
      <div>댓글 {commentLength}</div>
    </LikeAndCommentContainer>
  );
};

export default LikeAndComment;
