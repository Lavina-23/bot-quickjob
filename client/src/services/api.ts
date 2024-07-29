import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchVacancy = async () => {
  try {
    const response = await axios.post(`${API_URL}/post`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vacancies:", error);
  }
};
