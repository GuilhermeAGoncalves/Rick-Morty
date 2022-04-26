import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./pages/episodes/episodes.page";
import Home from "./pages/home/home.page";
import Locations from "./pages/locations/locations.page";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="locations" element={<Locations />} />
        <Route path="episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
