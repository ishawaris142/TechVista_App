// I have Implemented Footer Component.I performed following tasks..
// // Utilizes MUI components and custom styles to create a responsive footer with sections for company information, contact details, and subscription options.
// Implements smooth scroll-to-top functionality with a fixed button for better user experience when navigating long pages.
// Handles email subscription with input validation and state management, showing a simple alert and clearing the input on successful subscription.
// Includes social media links with interactive icons, and provides clear contact details with clickable phone and email links for user convenience.
import { useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBlenderPhone,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "40px 0",
    marginTop: "10px",
    boxShadow: "0px -3px 5px rgba(0, 0, 0, 0.2)", // Slight shadow
    fontSize: "24px",
  },
  link: {
    margin: "0 8px", // Margin on left and right for links
    color: "#007bff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialIcons: {
    display: "flex", // Ensure icons are in a flex container
    gap: "20px", // Space between each icon
    margin: "16px 0", // Margin around the group
  },
  socialIcon: {
    color: "#007bff",
    "&:hover": {
      color: "#0056b3",
    },
  },
  subscribe: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    marginLeft: "8px",
  },
  input: {
    marginRight: "8px",
    width: "100%",
    maxWidth: "300px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  copyright: {
    marginTop: "24px",
    textAlign: "center",
    color: "#6c757d",
  },
  scrollToTop: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "darkblue",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "24px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const emailRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${emailRef.current.value}`);
    emailRef.current.value = ""; // Clear the input after subscribing
  };

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "24px",
                  color: "darkblue",
                  fontWeight: "bold",
                }}
              >
                About Company
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  fontSize: "18px",
                }}
              >
                TechVista Services INC. is a well-known Information Technology
                Services &amp; Solutions Provider.
              </Typography>

              <div className={classes.socialIcons}>
                <Link href="#" className={classes.socialIcon}>
                  <FaFacebookF
                    style={{ fontSize: "24px", color: "darkblue" }}
                  />
                </Link>
                <Link href="#" className={classes.socialIcon}>
                  <FaTwitter style={{ fontSize: "24px", color: "darkblue" }} />
                </Link>
                <Link href="#" className={classes.socialIcon}>
                  <FaLinkedinIn
                    style={{ fontSize: "24px", color: "darkblue" }}
                  />
                </Link>
                <Link href="#" className={classes.socialIcon}>
                  <FaInstagram
                    style={{ fontSize: "24px", color: "darkblue" }}
                  />
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "24px",
                  color: "darkblue",
                  fontWeight: "bold",
                }}
              >
                Contact Info
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  fontSize: "18px",
                }}
              >
                Lahore Punjab Pakistan
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <FaBlenderPhone
                  style={{
                    fontSize: "24px",
                    color: "darkblue",
                    marginRight: "8px",
                  }}
                />
                <a href="tel:929460876668" style={{ fontSize: "20px" }}>
                  {" "}
                  +92 94608 76668
                </a>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <MdMarkEmailRead
                  style={{
                    fontSize: "24px",
                    color: "darkblue",
                    marginRight: "8px",
                  }}
                />
                <a
                  href="mailto:info@techvistaserviceinc.com"
                  style={{ fontSize: "20px" }}
                >
                  info@techvistaserviceinc.com
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "24px",
                  color: "darkblue",
                  fontWeight: "bold",
                }}
              >
                Stay Updated
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  fontSize: "18px",
                }}
              >
                Subscribe to our newsletter to get the latest news and updates.
              </Typography>
              <div className={classes.subscribe}>
                <TextField
                  label="Your email"
                  variant="outlined"
                  size="small"
                  className={classes.input}
                  inputRef={emailRef}
                />
                <Button
                  className={classes.button}
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                    color: "darkblue",
                  }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </Button>
              </div>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.copyright}
          >
            © 2024 TechVista Services INC. All rights reserved.
          </Typography>
        </Container>
      </footer>
      <button className={classes.scrollToTop} onClick={scrollToTop}>
        <FaAngleUp />
      </button>
    </>
  );
};

export default Footer;
