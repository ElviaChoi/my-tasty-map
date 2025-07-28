import PlaceList from "../components/PlaceList";
import PlaceSection from "../components/PlaceSection";

const MainPage = () => {
  return (
    <div className=" p-12">
      <PlaceSection title="저장된 맛집">
        <p className="text-center text-md text-gray-300">
          방문하고 싶은 맛집을 선택하세요!
        </p>
      </PlaceSection>

      <PlaceSection title="맛집 목록">
        <PlaceList />
      </PlaceSection>
    </div>
  );
};

export default MainPage;
