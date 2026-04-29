import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FlightPage from "./pages/flight";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<FlightPage />} path="/open-playground" />
    </Routes>
    </BrowserRouter>
  )
}

export default App
