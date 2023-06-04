import React from "react";

import "../Styles/cardContent.css";
import { Button, Grid } from "@mui/material";
import img1 from "../Assests/Vector (1).png";
import img2 from "../Assests/Vector(2).png";
import img4 from "../Assests/Vector (4).png";
import img5 from "../Assests/Vector(5).png";
const CardContent = () => {
  return (
    <div className="content_container">
      <Grid container>
        <Grid item sm={12} md={5} width={"100%"}>
          <Grid container className="section-2">
            <Grid item xs={6} sm={4} className="section-2-content">
              <div className="content-container">
                <div className="header">
                  <p>Referral Earning</p>
                </div>
                <div className="content">
                  <p>&#8377; 2,500</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className="section-2-content">
              <div className="content-container-left">
                <div className="header">
                  <p> Total Referrals </p>
                </div>
                <div className="content">
                  <p> 7</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className="section-2-content">
              <div className="content-container">
                <div className="header">
                  <p>Wallet Balance</p>
                </div>
                <div className="content">
                  <p>&#8377; 500</p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              sm={12}
              className="section-2-content"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              paddingRight={"5px"}
            >
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  width: "200px",
                  height: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#800080",
                }}
              >
                Withdraw Balance
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={7} width={"100%"}>
          <div className="section-3">
            <div className="section-3-header">
              <p>Your Referral Code</p>
            </div>
            <div className="section-3-container">
              <p>EDCH54</p>
            </div>
          </div>
        </Grid>
        <Grid item md={8} width={"100%"}>
          <div className="section-4">
            <Grid container>
              <Grid item sm={12} width={"100%"}>
                <div className="section-4-header">How does it work ?</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} width={"324px"}>
                <div className="section-4-body">
                  <div className="section-4-avatar">
                    <img src={img1} alt="first avatar" />
                  </div>
                  <div className="section-4-body-content">
                    <div className="header">
                      <p>Invite your Friends</p>
                    </div>
                    <div className="content">
                      <p>Share the link tutedude.com with your friends</p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} width={"324px"}>
                <div className="section-4-body">
                  <div className="section-4-avatar">
                    <p>&#8377; </p>
                  </div>
                  <div className="section-4-body-content">
                    <div className="header">
                      <p>Friend purchases any course</p>
                    </div>
                    <div className="content">
                      <p>Using you REFERRAL CODE in the payments page</p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} width={"324px"}>
                <div className="section-4-body">
                  <div className="section-4-avatar">
                    <img src={img2} alt="first avatar" />
                  </div>
                  <div className="section-4-body-content">
                    <div className="header">
                      <p>You get ₹ 200 as referral money</p>
                    </div>
                    <div className="content">
                      <p>
                        UOf total purchase the friend makes sharebale to your
                        wallet
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} width={"324px"}>
                <div className="section-4-body">
                  <div className="section-4-avatar">
                    <img src={img4} alt="first avatar" />
                  </div>
                  <div className="section-4-body-content">
                    <div className="header">
                      <p>Your Friend gets ₹ 200 Off </p>
                    </div>
                    <div className="content">
                      <p>
                        On his overall fee on successful purchase using your
                        referral code
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} width={"324px"}>
                <div className="section-4-body">
                  <div className="section-4-avatar">
                    <img src={img5} alt="first avatar" />
                  </div>
                  <div className="section-4-body-content">
                    <div className="header">
                      <p>Transfer money from wallet </p>
                    </div>
                    <div className="content">
                      <p>
                        When the wallet balance reaches ₹200 or more, you can
                        withdraw it
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={12} width={"100%"}>
          <div className="footer">
            <div className="footer-enrolled">Friends Who Enrolled</div>
            <div className="footer-terms">Terms & Conditions</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardContent;
