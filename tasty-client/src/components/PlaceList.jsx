import { useEffect, useState } from "react";
import { getPlaces } from "../api/index";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPlaces()
      .then((data) => {
        setPlaces(data.places);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-gray-800 text-center">데이터를 불러오는 중입니다...</p>
    );
  }

  if (error) {
    return <p className="text-red-400 text-center">{error}</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {places.map((p) => (
        <PlaceCard
          key={p.id}
          title={p.title}
          image={p.image}
          description={p.description}
        />
      ))}
    </div>
  );
};

export default PlaceList;
