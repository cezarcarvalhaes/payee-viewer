import React from "react";
import "./Header.css";
import Typography from '@material-ui/core/Typography';


const Header = () => (
  <div id = "logo-container">
    <img src="./assets/images/paymerang-logo.png" alt="paymerang logo"/>
    <Typography variant="display1" gutterBottom>
      Payee Portal
    </Typography>
  </div>
);

export default Header;
