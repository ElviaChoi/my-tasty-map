import { useEffect, useState } from "react";
import { getSavedPlaces, deleteSavedPlace } from "../api/index";
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

  const handleDelete = async (id) => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (!confirm) return;

    try {
      await deleteSavedPlace(id);
      setSavedPlaces((prev) => prev.filter((place) => place.id !== id));
    } catch (err) {
      alert("삭제에 실패했습니다.");
    }
  };

  if (savedPlaces.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center w-full mt-4">
        찜한 맛집이 없습니다.
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
          onDeleteClick={() => handleDelete(place.id)}
        />
      ))}
    </div>
  );
};

export default SavedPlaceList;
