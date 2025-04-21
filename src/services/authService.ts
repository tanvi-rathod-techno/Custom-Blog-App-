import axios from "axios";
import { LoginData } from "../types"; // Assuming LoginData type is declared there

type LoginResponse = {
  token: string;
};

export const loginUser = async (credentials: LoginData): Promise<LoginResponse> => {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const response = await axios.post(`${apiUrl}/login`, credentials);

    if (response.data.status === false) {
      throw new Error(response.data.message || "Login failed");
    }

    return response.data; // Assuming it returns { token }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Invalid credentials");
    } else {
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
};
