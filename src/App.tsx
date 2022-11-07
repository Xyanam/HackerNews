import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AllNews from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <AllNews />
    </div>
  );
}

export default App;
