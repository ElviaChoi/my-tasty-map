import { http, HttpResponse } from "msw";

const STORAGE_KEY = "saved_places";

function loadSaved() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}
function saveSaved(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const handlers = [
  http.get("/places", async () => {
    const res = await fetch("/places.json");
    const data = await res.json();
    return HttpResponse.json({ places: data }, { status: 200 });
  }),

  // 찜 목록 가져오기
  http.get("/users/places", () => {
    return HttpResponse.json({ places: loadSaved() }, { status: 200 });
  }),

  // 찜 추가
  http.post("/users/places", async ({ request }) => {
    const body = await request.json();
    const newPlace = body.place;

    const saved = loadSaved();
    const index = saved.findIndex((p) => p.id === newPlace.id);
    if (index >= 0) saved[index] = newPlace;
    else saved.push(newPlace);

    saveSaved(saved);
    return HttpResponse.json({ message: "saved" }, { status: 200 });
  }),

  // 찜 삭제
  http.delete("/users/places/:id", ({ params }) => {
    const saved = loadSaved();
    const updated = saved.filter((p) => p.id !== params.id);
    saveSaved(updated);
    return new Response(null, { status: 204 });
  }),
];
