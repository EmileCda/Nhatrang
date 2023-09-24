import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
import Navbar from "./Navbar";
import { applicationName } from "../lib/utils";
import { useStore } from "@nanostores/react";
import { navBarStore } from "../stores/NavBar.store";
import { ThemeProvider } from "styled-components";
import { AppGlobalStyle, colorsDark, colorsLight } from "../styles/App.style";
import StreetFood from "./StreetFood";

export default function App() {
  const { isDark } = useStore(navBarStore);

  document.title = applicationName();

  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={isDark ? colorsDark : colorsLight}>
          <AppGlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/StreeFood" element={<StreetFood />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
