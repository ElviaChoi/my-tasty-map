import { useEffect, useState } from "react";
import {
  getSavedPlaces,
  addToSavedPlaces,
  deleteSavedPlace,
} from "../api/index";
import PlaceList from "../components/PlaceList";
import PlaceSection from "../components/PlaceSection";
import SavedPlaceList from "../components/SavedPlaceList";

const MainPage = () => {
  const [savedPlaces, setSavedPlaces] = useState([]);

  useEffect(() => {
    const fetchSavedPlaces = async () => {
      const data = await getSavedPlaces();
      setSavedPlaces(data.places);
    };
    fetchSavedPlaces();
  }, []);

  const handleSavePlace = async (newPlace) => {
    try {
      await addToSavedPlaces(newPlace);

      setSavedPlaces((previousPlaces) => {
        const existingIndex = previousPlaces.findIndex(
          (savedPlace) => savedPlace.id === newPlace.id
        );

        if (existingIndex >= 0) {
          const updatedPlaces = [...previousPlaces];
          updatedPlaces[existingIndex] = newPlace;
          return updatedPlaces;
        }

        return [newPlace, ...previousPlaces];
      });

      alert("찜한 맛집으로 저장되었습니다!");
    } catch (error) {
      alert("찜하기에 실패했습니다.");
    }
  };

  const handleDeletePlace = async (id) => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (!confirm) return;

    try {
      await deleteSavedPlace(id);
      setSavedPlaces((prev) => prev.filter((place) => place.id !== id));
    } catch (err) {
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <div className=" p-12">
      <PlaceSection title="찜한 맛집">
        <SavedPlaceList places={savedPlaces} onDelete={handleDeletePlace} />
      </PlaceSection>

      <PlaceSection title="맛집 목록">
        <PlaceList onSave={handleSavePlace} />
      </PlaceSection>
    </div>
  );
};

export default MainPage;
