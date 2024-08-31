import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchVacancy = async () => {
  try {
    const response = await axios.get(`${API_URL}/getVacancy`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    return null;
  }
};
