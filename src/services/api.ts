import axios from "axios";
import { apiService } from './apiService'

interface LikeResponse {
  success: boolean
  likes: number
}

const apiUrl = 'http://192.168.0.110:8000/api/v2'

// Function to get all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await axios.post(`${apiUrl}/home-blogs`);
    return response.data.response.data; 
  } catch (error) {
    throw new Error("Error fetching blog posts");
  }
};


export const likeBlogPost = async (blogId: number): Promise<LikeResponse> => {
  return await apiService.post<LikeResponse>('likes', { blog_id: blogId })
}
