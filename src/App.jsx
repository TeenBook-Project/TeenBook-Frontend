import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
import Layout from "./components/Layout";
import LibraryData from "./components/LibraryData";
import AttendanceMap from "./pages/AttendanceMap";
import BooksData from "./components/BooksData";
import Chart from "./pages/Chart";
import Login from "./pages/Login";
import Loan from "./pages/Loan";
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
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Loan" element={<Loan />} />
      </Routes>
    </Layout>
  );
}

export default App;
