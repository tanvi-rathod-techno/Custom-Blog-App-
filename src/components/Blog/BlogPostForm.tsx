// src/components/Blog/BlogPostForm.tsx
import React, { useState } from "react";

type Props = {
  initialData?: { title: string; content: string };  // For editing posts
  onSubmit: (data: { title: string; content: string }) => void;  // On submit handler
};

const BlogPostForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = () => {
    onSubmit({ title, content });
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded">
      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mb-4 p-2 border rounded"
        placeholder="Content"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default BlogPostForm;
