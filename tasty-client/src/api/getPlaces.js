import axios from "axios";

export const getPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:3000/places");
    return res.data;
  } catch (err) {
    console.error("API 호출 에러:", err);
    return [];
  }
};
