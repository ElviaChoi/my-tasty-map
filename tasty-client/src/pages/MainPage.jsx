import PlaceList from "../components/PlaceList";
import PlaceSection from "../components/PlaceSection";
import SavedPlaceList from "../components/SavedPlaceList";

const MainPage = () => {
  return (
    <div className=" p-12">
      <PlaceSection title="찜한 맛집">
        <SavedPlaceList />
      </PlaceSection>

      <PlaceSection title="맛집 목록">
        <PlaceList />
      </PlaceSection>
    </div>
  );
};

export default MainPage;
