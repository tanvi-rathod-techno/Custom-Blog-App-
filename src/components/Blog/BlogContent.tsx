// src/components/Blog/BlogContent.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

const BlogContent: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
        setPosts(response.data); // Assuming response contains blog posts
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading blog posts...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border-b py-4">
          <h2 className="text-xl font-semibold">
            <Link to={`/post/${post.id}`}>{post.title}</Link> {/* Link to PostDetail */}
          </h2>
          <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
