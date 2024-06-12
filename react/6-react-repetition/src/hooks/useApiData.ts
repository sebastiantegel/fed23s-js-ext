import axios from "axios";

export const useApiData = (url: string) => {
  const get = async <T>(querystrings: string) => {
    const response = await axios.get<T>(
      `${url}&appid=${import.meta.env.VITE_API_KEY}&${querystrings}`
    );

    return response.data;
  };

  return { get };
};
