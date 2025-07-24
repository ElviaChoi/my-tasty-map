import { useEffect, useState } from "react";
import { getPlaces } from "../api/index";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlaces();
        setPlaces(data.places);
      } catch (err) {
        console.error("에러 발생:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <p className="bg-red-200 text-red-900 p-4 text-center font-semibold">
        {error}
      </p>
    );
  }

  if (loading) {
    return (
      <p className="text-gray-800 text-center">맛집을 불러오는 중입니다...</p>
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
