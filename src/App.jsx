import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
import Layout from "./components/Layout";
import LibraryData from "./components/LibraryData";
import "./App.css";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LibraryMap" element={<LibraryMap />} />
        <Route path="/LibraryData" element={<LibraryData />} />
      </Routes>
    </Layout>
  );
}

export default App;
