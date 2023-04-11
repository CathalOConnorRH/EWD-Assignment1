import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

const Header = (props) => {
    console.log("header " + props.title)
    const title = props.title
    const name = props.name

    return (
        <Paper component="div" sx={styles.root}>
            <IconButton
                aria-label="go back"
            >
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {props.type==="movies" || props.type==="tvshows" ? "Discover " + props.title : name}
            </Typography>
            <IconButton
                aria-label="go forward"
            >
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Header;
