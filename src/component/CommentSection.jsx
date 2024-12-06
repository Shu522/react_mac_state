import { useState } from "react";

const CommentSection = ({ comments = [] }) => {
  const [commentList, setCommentList] = useState(comments);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim()) {
      setCommentList([...commentList, comment]);
      setComment("");
    }
  };

  const handleDeleteComment = (index) => {
    setCommentList((v) => v.filter((x, i) => i !== index));
  };

  return (
    <div className="comment-section">
      <h3>댓글:</h3>
      {commentList.map((v, i) => (
        <div key={i} className="comment-item">
          <p>{v}</p>
          {/* 삭제 버튼 추가 */}
          <button onClick={() => handleDeleteComment(i)}>삭제</button>
        </div>
      ))}
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="댓글을 입력하세요"
      />
      <button onClick={handleAddComment}>추가</button>
    </div>
  );
};

export default CommentSection;
