import axios from "axios";

export const getPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:3000/places");
    return res.data;
  } catch (err) {
    if (err.response) {
      const status = err.response.status;
      switch (status) {
        case 404:
          throw new Error("요청하신 데이터를 찾을 수 없습니다. (404)");
        case 500:
          throw new Error("서버 내부 오류입니다. (500)");
        default:
          throw new Error(`알 수 없는 에러가 발생했습니다. (${status})`);
      }
    } else {
      throw new Error("서버에 연결할 수 없습니다.");
    }
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
