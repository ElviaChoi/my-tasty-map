import PlaceList from "../components/PlaceList";

function MainPage() {
  return (
    <div className="p-8">
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          찜한 맛집
        </h2>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          맛집 목록
        </h2>
        <PlaceList />
      </section>
    </div>
  );
}

export default MainPage;
