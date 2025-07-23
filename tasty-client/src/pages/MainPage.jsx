import PlaceList from "../components/PlaceList";
import PlaceSection from "../components/PlaceSection";

function MainPage() {
  return (
    <div className="p-8">
      <PlaceSection title="찜한 맛집"></PlaceSection>

      <PlaceSection title="맛집 목록">
        <PlaceList />
      </PlaceSection>
    </div>
  );
}

export default MainPage;
