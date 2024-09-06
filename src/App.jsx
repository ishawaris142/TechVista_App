// as mostly states are not passed in siblings like but we have to pass these in parent so that each time any updation occur then the parent will reprint desires childs.Thats Why we use here useStae and useRef Hook for statemanagement of data submission and Scrolling of sections upon button clicking...
//Wrap all the components in theme provider to apply a specific theme like font style to whole document.
import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import SubmittedData from "./components/ContactUs/SubmittedData.jsx";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          contactUsRef={contactUsRef}
        />
        <div ref={homeRef}>
          <Slider />
        </div>
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={contactUsRef}>
          <Routes>
            <Route
              path="/"
              element={<ContactUs setSubmittedData={setSubmittedData} />}
            />
            <Route
              path="/submitted"
              element={<SubmittedData data={submittedData} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
