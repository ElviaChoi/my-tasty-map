import { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("위치 정보를 지원하지 않는 브라우저입니다.");
      setLocation({ lat: 37.4979, lon: 127.0276 }); // 강남역 기준
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        setError(
          "위치를 불러오지 못했습니다. 기본 위치(강남역) 기준으로 사용합니다."
        );
        setLocation({ lat: 37.4979, lon: 127.0276 }); // 강남역
      }
    );
  }, []);

  return { location, error };
};
