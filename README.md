# 나만의 맛집 프로젝트 🍜

> 프론트엔드 개발 학습을 위한 React 기반 웹앱입니다.  
> 제공된 백엔드 API를 활용해 맛집 목록을 불러오고, 사용자 위치 기반 거리 정렬 등의 기능을 구현했습니다.

---

## 📌 주요 기능

- ✅ 맛집 목록 불러오기 (`GET /places`)
- ✅ 로딩 상태 처리
- ✅ 에러 메시지 표시
- ✅ 사용자 위치 기반 거리 정렬
- ⏳ 맛집 찜하기 및 찜 목록 보기 기능 (3단계 예정)

---

## 🛠️ 기술 스택

| 영역       | 사용 기술                  |
| ---------- | -------------------------- |
| 프레임워크 | React (Vite 기반)          |
| 스타일링   | Tailwind CSS               |
| HTTP 통신  | Axios                      |
| 상태 관리  | useState, useEffect        |
| API 서버   | Node.js + Express (제공됨) |

---

## 📁 폴더 구조 (프론트엔드 기준)

```
my-tasty-map/
├── src/
│   ├── api/             # API 요청 함수
│   │   └── index.js
│   ├── components/      # UI 컴포넌트
│   │   ├── PlaceCard.jsx
│   │   ├── PlaceList.jsx
│   │   └── PlaceSection.jsx
│   ├── pages/           # 메인 페이지
│   │   └── MainPage.jsx
│   ├── utils/           # 거리 계산 유틸
│   │   └── loc.js
│   ├── App.jsx
│   └── main.jsx
└── public/
```

---

## 🚀 실행 방법

1. **백엔드 서버 실행 (제공된 코드 사용)**

```bash
# 백엔드 서버 루트 디렉토리에서
npm install
node server.js
```

2. **프론트엔드 실행 (Vite)**

```bash
# 클라이언트 루트 (my-tasty-map)에서
npm install
npm run dev
```

---

## 📍 구현 히스토리

- **1단계**: 맛집 리스트 불러오기 및 카드 컴포넌트 렌더링
- **2단계**
  - 2-1: 로딩 상태 처리
  - 2-2: HTTP 에러 처리 (`try-catch-finally`)
  - 2-3: 사용자 위치 기반 거리 정렬 (`navigator.geolocation` + `sortPlacesByDistance`)
- **3단계 (예정)**: 맛집 찜하기 및 찜 목록 조회

---

## 🙋‍♀️ 개발자 역할

- 프론트엔드 전반 구현 담당
- 백엔드 API는 강의에서 제공된 Node.js 기반 서버 사용
- API 호출, 상태 관리, UI 컴포넌트 분리 및 거리 정렬 로직 구현

---

## 📎 참고

- 거리 계산: `utils/loc.js`에 Haversine 공식 적용
- 위치 정보: 브라우저 `navigator.geolocation` API 사용
