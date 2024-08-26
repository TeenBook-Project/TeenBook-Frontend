import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
import Layout from "./components/Layout";
import LibraryData from "./components/LibraryData";
import AttendanceMap from "./pages/AttendanceMap";
import BooksData from "./components/BooksData";
import Login from "./pages/Login";
import Loan from "./pages/Loan";
import Stats from "./pages/Stats";
import Shop from "./pages/Shop";
import "./App.css";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LibraryMap" element={<LibraryMap />} />
        <Route path="/LibraryData" element={<LibraryData />} />
        <Route path="/BooksData" element={<BooksData />} />
        <Route path="/AttendanceMap" element={<AttendanceMap />} />
        <Route path="/Loan" element={<Loan />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Layout>
  );
}

export default App;
