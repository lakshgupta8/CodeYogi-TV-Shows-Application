import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <div className="mx-auto max-w-5xl">
      <Routes>
        <Route path="/" element={<ShowListPage />} />
        <Route path="show/:show_id" element={<ShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
