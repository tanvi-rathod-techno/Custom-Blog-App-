// src/pages/BlogList.tsx
import React, { useEffect, useState } from "react";
import BlogPostItem from "../components/Blog/BlogPostItem";
import { getBlogPosts } from "../services/api";

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

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <BlogPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
