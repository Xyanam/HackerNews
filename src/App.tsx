import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CurrentNewsPage from "./pages/CurrentNewsPage/CurrentNewsPage";
import AllNews from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllNews />} />
        <Route path="/:id" element={<CurrentNewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
