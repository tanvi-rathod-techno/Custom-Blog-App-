// File: pages/Home.tsx
import React from "react";
import BlogList from "./BlogList";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <BlogList />
    </div>
  );
};

export default Home;
