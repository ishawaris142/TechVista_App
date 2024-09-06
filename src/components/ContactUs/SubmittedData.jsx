// Show submitted data
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "24px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "40px",
    borderRadius: "8px",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  },
  imagePreview: {
    marginTop: "16px",
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
      maxHeight: "300px",
      borderRadius: "8px",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
    },
  },
}));

const SubmittedData = ({ data }) => {
  const classes = useStyles();

  if (!data) {
    return (
      <Typography variant="h6" align="center">
        No Data Submitted
      </Typography>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
        Submitted Data
      </Typography>
      <Typography>Name: {data.name}</Typography>
      <Typography>Gender: {data.gender}</Typography>
      <Typography>Subscribed: {data.subscribe ? "Yes" : "No"}</Typography>
      <Typography>Country: {data.country}</Typography>
      <Typography>Message: {data.message}</Typography>
      {data.file && (
        <div className={classes.imagePreview}>
          <img src={URL.createObjectURL(data.file)} alt="Uploaded Preview" />
        </div>
      )}
    </Paper>
  );
};
SubmittedData.propTypes = {
  data: PropTypes.arrayOf(),
};
export default SubmittedData;
