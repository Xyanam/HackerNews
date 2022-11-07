import React from "react";
import "./App.css";
import AllNews from "./components/Header/AllNews/AllNews";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AllNews />
    </div>
  );
}

export default App;
