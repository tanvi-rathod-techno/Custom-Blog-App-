// components/Blog/BlogPostItem.tsx
import React from "react";
import LikeButton from "./LikeButton";
import CommentBox from "./CommentBox";

type BlogPost = {
  id: number;
  blog_title: string;
  blog_content: string;
  image_path: string | null;
  total_likes: number;
  total_comments: number;
  created_at: string;
  user: { name: string };
};

const BlogPostItem: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{post.blog_title}</h2>
      <p className="text-gray-500 text-sm mb-4">
        By <strong>{post.user.name}</strong> |{" "}
        <span>{new Date(post.created_at).toLocaleDateString()}</span>
      </p>      
      <div>
      <img
          src={`https://picsum.photos/400/200?random=${post.id}`}
          alt={post.blog_title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      </div>
      <p className="text-gray-700 mb-4">{post.blog_content}</p>
      <div className="flex items-center space-x-4">
       <LikeButton initialLikes={post.total_likes} blogId={post.id} />
        <CommentBox initialComments={post.total_comments} />
      </div>
    </div>
  );
};

export default BlogPostItem;
