import { useEffect, useState } from "react";
import { getSavedPlaces } from "../api/index";
import PlaceCard from "./PlaceCard";

const SavedPlaceList = () => {
  const [savedPlaces, setSavedPlaces] = useState([]);

  useEffect(() => {
    const fetchSavedPlaces = async () => {
      const data = await getSavedPlaces();
      setSavedPlaces(data.places);
    };

    fetchSavedPlaces();
  }, []);

  if (savedPlaces.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center w-full mt-4">
        저장된 맛집이 없습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {savedPlaces.map((place) => (
        <PlaceCard
          key={`saved-${place.id}`}
          title={place.title}
          image={place.image}
        />
      ))}
    </div>
  );
};

export default SavedPlaceList;
