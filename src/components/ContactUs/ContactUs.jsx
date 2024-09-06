// Created a contact us form and handle its submission where i perform following tasks
// Manages form state and handles changes, including file uploads and checkbox selections, with the `handleChange` function.
// Validates required fields on form submission and navigates to a different route upon successful submission using `navigate`.
// Provides a user-friendly interface with MUI components for text inputs, radio buttons, checkboxes, and a select dropdown for country selection.
// Uses `Grid` for responsive layout, ensuring the form and image are well-aligned and the form is centered on the page.ALso use react router dom for page navigation upon submition
import { useState } from "react";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import image6 from "../Images/image-6.jpg";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: "24px",
    maxWidth: "500px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)", // Custom boxShadow
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: "16px 0",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "16px",
  },
  button: {
    width: "100%",
    marginBottom: "8px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "16px",
  },
}));

const ContactUs = ({ setSubmittedData }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    subscribe: false,
    country: "",
    message: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFormData({ ...formData, file });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.gender ||
      !formData.country ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmittedData(formData);
    navigate("/submitted"); // Navigate to the new route
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center" fontWeight="bold">
              Contact Us
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormControl
                component="fieldset"
                className={classes.formControl}
                required
              >
                <Typography variant="subtitle1">Gender</Typography>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                }
                label="Subscribe to newsletter"
              />
              <FormControl fullWidth className={classes.formControl} required>
                <InputLabel>Country</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  label="Country"
                >
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="pk">Pakistan</MenuItem>
                  <MenuItem value="au">Australia</MenuItem>
                  <MenuItem value="in">India</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                  <MenuItem value="fr">France</MenuItem>
                  <MenuItem value="jp">Japan</MenuItem>
                  <MenuItem value="za">South Africa</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className={classes.buttonGroup}>
                <Button
                  variant="contained"
                  component="label"
                  color="secondary"
                  className={classes.button}
                >
                  Upload Image
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    hidden
                  />
                </Button>
              </div>
              <div className={classes.buttonGroup}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={image6} alt="Contact" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

ContactUs.propTypes = {
  setSubmittedData: PropTypes.func.isRequired,
};

export default ContactUs;
