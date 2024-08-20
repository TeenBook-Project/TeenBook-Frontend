import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
import Layout from "./components/Layout";
import LibraryData from "./components/LibraryData";
import AttendanceMap from "./pages/AttendanceMap";
import Login from "./pages/Login";
import "./App.css";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LibraryMap" element={<LibraryMap />} />
        <Route path="/LibraryData" element={<LibraryData />} />
        <Route path="/AttendanceMap" element={<AttendanceMap />} />
      </Routes>
    </Layout>
  );
}

export default App;
