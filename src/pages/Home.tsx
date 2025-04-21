// File: pages/Home.tsx
import React from "react";
import BlogList from "./BlogList";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6"> Blog </h1>
      <BlogList />
    </div>
  );
};

export default Home;
