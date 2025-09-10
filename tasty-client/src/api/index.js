import axios from "axios";

const api = axios.create({ baseURL: "" });

export const getPlaces = async () => {
  const res = await api.get("/places");
  return res.data;
};

export const getSavedPlaces = async () => {
  const res = await api.get("/users/places");
  return res.data;
};

export const addToSavedPlaces = async (place) => {
  const res = await api.post("/users/places", { place });
  return res.data;
};

export const deleteSavedPlace = async (id) => {
  await api.delete(`/users/places/${id}`);
};
