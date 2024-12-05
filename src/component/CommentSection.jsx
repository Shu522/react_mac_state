import { useState } from "react";

const CommentSection = ({ comments }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);
  const addComment = () => {
    if (comment) {
      setCommentList([...commentList, comment]);
      setComment("");
    }
  };

  return (
    <>
      <h3>댓글:</h3>
      {commentList.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
      ></input>
      <button onClick={addComment}>추가</button>
    </>
  );
};

export default CommentSection;
