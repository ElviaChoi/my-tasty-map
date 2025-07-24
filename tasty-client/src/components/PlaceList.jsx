import { useEffect, useState } from "react";
import { getPlaces } from "../api/index";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);
    setPlaces([]);

    getPlaces({ signal })
      .then((data) => {
        setPlaces(data.places);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") {
          return;
        }
        if (err.response?.status === 404) {
          setError("요청하신 데이터를 찾을 수 없습니다. (404)");
        } else {
          setError("에러가 발생했습니다.");
        }
        setPlaces([]);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return (
      <p className="bg-red-200 text-red-900 text-center py-4 px-6 rounded-md mt-6">
        {error}
      </p>
    );
  }
  if (loading) {
    return (
      <p className="text-gray-800 text-center">데이터를 불러오는 중입니다...</p>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {places.map((p) => (
        <PlaceCard key={p.id} title={p.title} image={p.image} />
      ))}
    </div>
  );
};

export default PlaceList;
