import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
