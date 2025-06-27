import React, { useState } from "react";

export const LikeButton = () => {

  const [likes, setLikes] = useState(0);


  const handleLike = () => {
    setLikes(likes + 1);
  };


  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={handleLike} className="btn-1">
        Me gusta ({likes})
      </button>
    </div>
  );
};