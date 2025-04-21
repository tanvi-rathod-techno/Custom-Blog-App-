// src/pages/PostDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();  // Get post ID from the URL
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`);
        setPost(response.data); // Assuming response contains the blog post
        setLoading(false);
      } catch (err) {
        setError("Failed to load post details");
        setLoading(false);
      }
    };

    if (postId) {
      fetchPostDetails();
    }
  }, [postId]);

  if (loading) return <div>Loading post details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleDateString()} by {post.author}</p>
      <div className="mt-4">{post.content}</div>
    </div>
  );
};

export default PostDetail;
