// Header.jsx
// Header section with home,aboutus and contactUs with proper scrolling functionality on clicking buttons that is acheived by usi useRef hook
import { DiTechcrunch } from "react-icons/di";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header.css";

export default function Header({
  scrollToSection,
  homeRef,
  aboutUsRef,
  contactUsRef,
}) {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <Typography variant="h6" className="typography">
          <DiTechcrunch className="typographyIcon" /> TechVista
        </Typography>
        <Button
          variant="contained"
          className="button buttonHome"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </Button>
        <Button
          variant="contained"
          className="button"
          onClick={() => scrollToSection(aboutUsRef)}
        >
          About Us
        </Button>
        <Button
          variant="contained"
          className="button"
          onClick={() => scrollToSection(contactUsRef)}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  contactUsRef: PropTypes.object.isRequired,
};
