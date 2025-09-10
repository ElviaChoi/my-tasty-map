# 나만의 맛집 프로젝트 🍜

> 프론트엔드 개발 학습을 위한 React 기반 웹앱입니다.  
> MSW(Mock Service Worker)를 활용해 API를 모킹하고, 맛집 목록 조회, 찜하기, 거리 기반 정렬 등의 기능을 구현했습니다.

## ✨ 라이브 데모

**배포 주소:** [https://my-tasty-map.vercel.app/](https://my-tasty-map.vercel.app/)

## 📸 스크린샷

<img width="1706" height="956" alt="나만의맛집" src="https://github.com/user-attachments/assets/95977431-7ab4-43d3-9468-9c346ecf5b04" />

---

## 📌 주요 기능

- ✅ 맛집 목록 불러오기 (`GET /places`)
- ✅ 맛집 찜하기 및 찜 목록 보기 (`GET /user-places`, `PUT /user-places`)
- ✅ 찜한 맛집 삭제 (`DELETE /user-places`)
- ✅ 사용자 위치 기반 거리 정렬
- ✅ 로딩 및 에러 상태 처리

---

## 🛠️ 기술 스택

| 영역        | 사용 기술                 |
| ----------- | ------------------------- |
| 프레임워크  | React (Vite 기반)         |
| 스타일링    | Tailwind CSS              |
| HTTP 통신   | Axios                     |
| API Mocking | MSW (Mock Service Worker) |
| 상태 관리   | useState, useEffect       |
| API 서버    | Node.js + Express         |
| 배포        | Vercel                    |

---

## 📁 폴더 구조 (프론트엔드 기준)

```
tasty-client/
├── src/
│   ├── api/             # API 요청 함수
│   ├── components/      # UI 컴포넌트
│   │   ├── PlaceCard.jsx
│   │   ├── PlaceList.jsx
│   │   ├── PlaceSection.jsx
│   │   └── SavedPlaceList.jsx
│   ├── hooks/           # 커스텀 훅
│   ├── mocks/           # MSW 핸들러 및 설정
│   │   ├── browser.js
│   │   └── handlers.js
│   ├── pages/           # 메인 페이지
│   ├── utils/           # 유틸리티 함수
│   ├── App.jsx
│   └── main.jsx
└── public/              # 정적 파일
```

---

## 🚀 실행 방법

1. **프론트엔드 실행 (권장)**

   > MSW를 통해 API가 모킹되어 있으므로, 프론트엔드 서버만 실행해도 모든 기능을 확인할 수 있습니다.

   ```bash
   # tasty-client/ 디렉토리로 이동
   cd tasty-client

   # 의존성 설치
   npm install

   # 개발 서버 실행
   npm run dev
   ```

2. **백엔드 서버 실행 (선택 사항)**

   > 실제 백엔드 서버와 연동하여 테스트하고 싶을 경우에만 실행합니다.

   ```bash
   # eatingMark-BE/ 디렉토리로 이동
   cd eatingMark-BE

   # 의존성 설치
   npm install

   # 서버 실행
   node app.js
   ```

---

## 📍 구현 히스토리

- **1단계**: 맛집 리스트 불러오기 및 카드 컴포넌트 렌더링
- **2단계**: 로딩, 에러 처리 및 사용자 위치 기반 거리 정렬
- **3단계**: 맛집 찜하기, 찜 목록 조회 및 삭제 기능 구현

---

## 🙋‍♀️ 개발자 역할

- 프론트엔드 전반 구현 담당
- 초기에는 강의에서 제공된 Node.js 서버를 활용했으나, 이후 MSW를 도입하여 API를 모킹하고 독립적인 프론트엔드 개발 및 배포 환경 구축
- API 호출, 상태 관리, UI 컴포넌트 분리 및 거리 정렬 로직 구현

---

## 📎 참고

- 거리 계산: `utils/loc.js`에 Haversine 공식 적용
- 위치 정보: 브라우저 `navigator.geolocation` API 사용
- API Mocking: `msw`를 사용하여 로컬 개발 및 Vercel 배포 환경에서 백엔드 API를 모킹