// Uses mui for custom styling and show the about us content in different grids
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import image5 from "./Images/image-5.jpg";

const useStyles = makeStyles(() => ({
  container: {
    padding: "40px 20px",
    backgroundColor: "#f4f4f4",
  },
  heroSection: {
    marginBottom: "40px",
    textAlign: "center",
  },
  heroHeading: {
    fontSize: "10rem",
    fontWeight: "500",
    color: "darkblue",
  },
  heroText: {
    fontSize: "1.25rem",
    margin: "20px 0",
    color: "#333",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  textContainer: {
    padding: "20px",
  },
  textHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "darkblue",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.heroSection}>
        <Typography
          className={classes.heroHeading}
          variant="h2"
          level="1"
          gutterBottom
        >
          ABOUT US
        </Typography>
        <Typography className={classes.heroText} variant="body1">
          TechVista is a sophisticated and dynamic Single Page Application (SPA)
          meticulously crafted to spotlight the forefront of technological
          advancements and innovations. This modern platform serves as a digital
          showcase, featuring an immersive image slider that brings to life
          cutting-edge products, breakthrough technologies, and pivotal
          innovations shaping the tech landscape.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className={classes.imageContainer}>
            <img
              src={image5} // Replace with your image URL
              alt="About TechVista"
              className={classes.image}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.textContainer}>
            <Typography
              className={classes.textHeading}
              variant="h3"
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography className={classes.textBody} variant="body1">
              TechVista aims to provide a seamless and engaging user experience,
              showcasing the latest technological advancements through an
              intuitive and modern platform. We are dedicated to offering
              comprehensive insights into our services and fostering effortless
              communication.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
