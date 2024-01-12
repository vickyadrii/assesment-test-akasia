import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, PlanetDetailsPage, WishlistPage } from "../pages";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PlanetDetailsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
