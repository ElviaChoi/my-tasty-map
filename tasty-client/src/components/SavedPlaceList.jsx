import PlaceCard from "./PlaceCard";

const SavedPlaceList = ({ places, onDelete }) => {
  if (places.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center w-full mt-4">
        찜한 맛집이 없습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {places.map((place) => (
        <PlaceCard
          key={`saved-${place.id}`}
          title={place.title}
          image={place.image}
          onDeleteClick={() => onDelete(place.id)}
        />
      ))}
    </div>
  );
};

export default SavedPlaceList;
