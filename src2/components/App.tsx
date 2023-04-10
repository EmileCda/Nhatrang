import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Test from "./Test";
import Home from "./Home";
import Header from "./Header";
import { AppGlobalStyle } from "../styles/App.style";


export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
