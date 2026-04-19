import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetailsPage";
import ShowListPage from "./Pages/ShowsListPage";

function App() {
  return (
    <div className="bg-surface-base pb-10 min-h-screen text-text-secondary">
      <div className="mx-auto px-4 py-6 max-w-5xl text-text-primary">
        <Routes>
          <Route path="/" element={<ShowListPage />} />
          <Route path="show/:showId" element={<ShowDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
