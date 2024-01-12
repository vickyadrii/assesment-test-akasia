import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, PlanetDetailsPage } from "../pages";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PlanetDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
