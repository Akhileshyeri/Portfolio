// App.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import getTheme from "./theme/theme";
import { ThemeProvider, useThemeMode } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import TechnicalSkills from "./sections/TechnicalSkills";
import LatestWorks from "./sections/LatestWorks";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import QuestionBank from "./sections/projects/QuestionBank";
import SchoolERP from "./sections/projects/ShcoolERP";
import ExamApp from "./sections/projects/ExamApp";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <LatestWorks />
      <TechnicalSkills />
      <Contact />
    </>
  );
};

const AppContent = () => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);
  const location = useLocation();

  useEffect(() => {
    // Temporarily turn off smooth scrolling for instant jump
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Restore smooth scrolling for anchor links
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question-bank" element={<QuestionBank />} />
          <Route path="/erp" element={<SchoolERP />} />
          <Route path="/exam-app" element={<ExamApp />} />
        </Routes>

        <Footer mode={mode} />
      </Box>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;