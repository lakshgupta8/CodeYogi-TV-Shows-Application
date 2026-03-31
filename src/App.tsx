import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetailsPage";
import ShowListPage from "./Pages/ShowsListPage";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-stone-300 pb-10">
      <div className="mx-auto max-w-5xl px-4 py-6 text-stone-200">
        <Routes>
          <Route path="/" element={<ShowListPage />} />
          <Route path="show/:showId" element={<ShowDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
