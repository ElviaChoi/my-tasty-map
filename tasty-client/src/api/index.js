import axios from "axios";

export const getPlaces = async ({ signal }) => {
  try {
    const res = await axios.get("http://localhost:3000/places", { signal });
    return res.data;
  } catch (err) {
    console.error("API 호출 에러:", err);
    throw err;
  }
};

export const getSavedPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:3000/users/places");
    return res.data;
  } catch (err) {
    console.error("API 호출 에러:", err);
    return [];
  }
};
