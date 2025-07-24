import { useEffect, useState } from "react";
import { getPlaces } from "../api/index";
import { sortPlacesByDistance } from "../utils/loc";
import { useGeoLocation } from "../hooks/useGeoLocation";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const { location, error: locationError } = useGeoLocation();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlaces();

        if (location) {
          const sorted = sortPlacesByDistance(
            data.places,
            location.lat,
            location.lon
          );
          setPlaces(sorted);
        } else {
          setPlaces(data.places);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [location]);

  if (error || locationError) {
    return (
      <p className="bg-red-200 text-red-900 p-4 text-center font-semibold">
        {error || locationError}
      </p>
    );
  }

  if (loading) {
    return (
      <p className="text-gray-50 text-center">맛집을 불러오는 중입니다...</p>
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
