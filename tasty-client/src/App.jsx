import MainPage from "./pages/MainPage";
import "./style.css";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl text-center pt-6 font-bold mb-8">
        <div className="text-6xl my-6">🍔</div> 오늘 뭐 먹지?
      </h1>
      <MainPage />
    </div>
  );
};

export default App;
