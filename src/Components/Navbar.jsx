import React from "react";
import pic from "../Assests/image 1.png";
import { Button, Grid } from "@mui/material";
import "../Styles/Navbar.css";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  return (
    <div className="navbar">
      <Grid container>
        <Grid item xs={6} sm={2}>
          <div className="image">
            <img src={pic} alt="logo" />
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sm={10}
          // width={{ xs: "55%", sm: "100%" }}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <div className="button">
            <Button
              color="secondary"
              variant="contained"
              sx={{
                width: "165px",
                height: "48px",
                borderRadius: "10px",
                backgroundColor: "#800080",
                padding: "12px, 25px, 12px, 25px",
              }}
            >
              ProfileName
            </Button>
          </div>
          <ul className="nav-list">
            <li>My Assignment</li>
            <li>Chat with Mentor</li>
            <li className="dropdown">
              <Person2RoundedIcon />
              <div>ProfileName </div>
              <KeyboardArrowDownIcon />
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} width={"90%"} maxWidth={"90%"} margin={"auto"}>
          <div className="section-1">
            <p>UI/UX &#62; Refer & Earn </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
