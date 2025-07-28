import { useEffect, useState } from "react";
import { getPlaces, addToSavedPlaces } from "../api/index";
import { sortPlacesByDistance } from "../utils/loc";
import { useGeoLocation } from "../hooks/useGeoLocation";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const { location, error: locationError } = useGeoLocation();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePlaceClick = async (place) => {
    try {
      await addToSavedPlaces(place);
      alert("찜한 맛집으로 저장되었습니다!");
    } catch (err) {
      alert("찜하기에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (!location) return;

    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlaces();
        const sorted = sortPlacesByDistance(
          data.places,
          location.lat,
          location.lon
        );
        setPlaces(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [location]);

  if (error) {
    return (
      <p className="bg-red-200 text-red-900 p-4 text-center font-semibold">
        {error}
      </p>
    );
  }

  if (loading) {
    return (
      <p className="text-gray-50 text-center">맛집을 불러오는 중입니다...</p>
    );
  }

  return (
    <div className="p-4 space-y-10">
      {locationError && (
        <p className="text-sm text-center text-gray-500 mb-4">
          {locationError}
        </p>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        {places.map((p) => (
          <PlaceCard
            key={p.id}
            title={p.title}
            image={p.image}
            onSaveClick={() => handlePlaceClick(p)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
