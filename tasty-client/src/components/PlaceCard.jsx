const PlaceCard = ({ title, image, onSaveClick, onDeleteClick }) => {
  return (
    <div className="w-80 rounded-md overflow-hidden shadow border relative bg-white">
      <img
        src={image?.src}
        alt={image?.alt || title}
        className="w-full h-48 object-cover"
      />
      <div className="bg-gray-500 text-center py-2 text-base font-medium text-white">
        {title}
      </div>

      {onSaveClick && (
        <button
          onClick={onSaveClick}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-1 rounded"
        >
          찜하기
        </button>
      )}

      {onDeleteClick && (
        <button
          onClick={onDeleteClick}
          className="absolute top-2 right-2 bg-gray-200 text-indigo-900 text-sm px-2 py-1 rounded"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default PlaceCard;