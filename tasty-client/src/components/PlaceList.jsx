import { useEffect, useState } from "react";
import { getPlaces } from "../api/getPlaces";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then((data) => {
      console.log("받은 데이터:", data);
      setPlaces(data.places);
    });
  }, []);

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
