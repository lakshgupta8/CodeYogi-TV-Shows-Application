import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetailsPage";
import ShowListPage from "./Pages/ShowsListPage";

function App() {
  return (
    <div className="mx-auto max-w-5xl">
      <Routes>
        <Route path="/" element={<ShowListPage />} />
        <Route path="show/:showId" element={<ShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
