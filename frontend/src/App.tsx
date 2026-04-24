import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/home";
import FlightPage from "./app/pages/flight";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<FlightPage />} path="/flight" />
    </Routes>
    </BrowserRouter>
  )
}

export default App
