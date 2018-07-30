import React from "react";
import Typography from "@material-ui/core/Typography"

const footerStyle = {
    fontSize: '1.5em',
    textAlign: 'center',
    padding: '2em',
}

const logo = {
    width: "40px",
}

const Footer = () => {
    return (
        <div style = {footerStyle}>
            <a href = "https://github.com/cezarcarvalhaes/payee-viewer">
                <img src="./assets/images/github-logo.png" alt="paymerang logo" style = {logo}/>
            </a>
            <Typography variant="caption" align = "center">
                &copy; Cezar Carvalhaes 2018
            </Typography>
        </div>
    )};

export default Footer;