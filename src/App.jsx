import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";

// import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/compare" element={<ComparePage />} />
          {/*          <Route path="/watchlist" element={<WatchListPage />} />
           */}
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
