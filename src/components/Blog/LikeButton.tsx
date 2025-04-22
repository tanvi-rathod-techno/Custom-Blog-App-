import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-solid-svg-icons";  // Using filled or outlined icon
import { likeBlogPost } from "../../services/api";  // Import the function

export interface LikeButtonProps {
  initialLikes: number;
  blogId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialLikes, blogId }) => {
  const [likes, setLikes] = useState(initialLikes);
  // const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await likeBlogPost(blogId);
      if (response.success) {
        setLikes(response.likes);
      } else {
        console.error("Error liking the post.");
      }
    } catch (error) {
      console.error("Like failed:", error);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center space-x-1 text-red-500"
    >
      <FontAwesomeIcon icon={faHeartOutline} className={likes === 0 ? "text-gray-500" : ""} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
