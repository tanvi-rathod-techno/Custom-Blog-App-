import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";  // Font Awesome comment icon

export interface CommentBoxProps {
  initialComments: number;
}

const CommentBox: React.FC<CommentBoxProps> = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);

  return (
    <button onClick={() => setComments((prev) => prev + 1)} className="flex items-center space-x-1 text-blue-500">
      <FontAwesomeIcon icon={faComment} size="lg" />  {/* Display the Font Awesome comment icon */}
      <span>{comments}</span>
    </button>
  );
};

export default CommentBox;
