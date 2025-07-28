const PlaceCard = ({ title, image, onSaveClick, onDeleteClick }) => {
  return (
    <div className="w-48 rounded-md overflow-hidden shadow border relative bg-white">
      <img
        src={`http://localhost:3000/${image.src}`}
        alt={image.alt}
        className="w-full h-32 object-cover"
      />
      <div className="bg-gray-500 text-center py-2 text-sm font-medium text-white">
        {title}
      </div>

      {onSaveClick && (
        <button
          onClick={onSaveClick}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
        >
          찜하기
        </button>
      )}

      {onDeleteClick && (
        <button
          onClick={onDeleteClick}
          className="absolute top-2 right-2 bg-gray-200 text-indigo-900 text-xs px-2 py-1 rounded"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default PlaceCard;
