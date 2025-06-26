import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DwaporLanding from "./components/DwaporLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DwaporLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;