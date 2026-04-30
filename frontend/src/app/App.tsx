import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FlightPage from "./pages/flight";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<FlightPage />} path="/open-playground" />
    </Routes>
    </HashRouter>
  )
}

export default App
