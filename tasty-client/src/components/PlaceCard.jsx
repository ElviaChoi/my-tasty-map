const PlaceCard = ({ title, image }) => {
  return (
    <div className="w-48 rounded-md overflow-hidden shadow border">
      <img
        src={`http://localhost:3000/${image.src}`}
        alt={title}
        className="w-full h-32 object-cover"
      />
      <div className="bg-gray-100 text-center py-2 text-sm font-medium">
        {title}
      </div>
    </div>
  );
};

export default PlaceCard;
