// src/services/api.ts
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;  // Ensure API URL is defined

// Function to get all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await axios.post(`${apiUrl}/home-blogs`);
    console.log(response.data);  // Log the data to check its format
    return response.data.response.data;  // Assuming the response contains the blog posts
  } catch (error) {
    throw new Error("Error fetching blog posts");
  }
};
