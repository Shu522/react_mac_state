import { useState } from "react";

const LikeButton = ({ title, content }) => {
  const [num, setNum] = useState(0);

  const handleLike = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  return (
    <>
      <h2>{title}</h2>
      <span>{content}</span>
      <br />
      <span>좋아요: {num}</span>
      <div>
        {" "}
        <button onClick={handleLike} className="border border-slate-600 p-3">
          👍🏿
        </button>
      </div>
    </>
  );
};

export default LikeButton;
