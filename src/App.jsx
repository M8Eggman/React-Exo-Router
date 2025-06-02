import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Erreur from "./pages/Erreur/Erreur";
import Details from "./pages/Details/Details";
import Contact from "./pages/Contact/Contact";
import data from "./data/data.json";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop data={data} />} />
        <Route path="/Shop/:id" element={<Details data={data} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </>
  );
}
