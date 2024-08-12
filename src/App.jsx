import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LibraryMap" element={<LibraryMap />} />
    </Routes>
  );
}

export default App;
