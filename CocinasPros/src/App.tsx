//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Front_Cocinas" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
export default App;
