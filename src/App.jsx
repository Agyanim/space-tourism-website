import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
  );
};

export default App;
