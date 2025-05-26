import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element/>
        <Route path="/Shop" />
        <Route path="/Shop/:id" />
        <Route path="/Contact" />
      </Routes>
    </>
  );
}
