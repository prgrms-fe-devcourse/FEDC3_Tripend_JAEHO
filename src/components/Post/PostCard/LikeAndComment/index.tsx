import { LikeAndCommentContainer } from './style';

interface LikeAndCommentProps {
  likeLength: number;
  commentLength: number;
}

const LikeAndComment = ({ likeLength, commentLength }: LikeAndCommentProps) => {
  return (
    <LikeAndCommentContainer>
      <div>동행 신청 {likeLength} </div>
      <div>댓글 {commentLength}</div>
    </LikeAndCommentContainer>
  );
};

export default LikeAndComment;
