import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export const fetchVacancy = async () => {
  try {
    const response = await axios.get(`${API_URL}/incoming`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};
