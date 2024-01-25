import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid";
import bannerlogin from "../../assets/images/bannerlogin.png";
import loginicon1 from "../../assets/images/loginicon1.png";
import loginicon2 from "../../assets/images/loginicon2.png";
import googleicon from "../../assets/images/googleicon.png";
import facebookicon from "../../assets/images/facebookicon.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  return (
    <>
      <Header isLogin="true" />
      <Grid sx={{ flexGrow: 1, padding: 5 }} container spacing={2}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span className="text-3xl font-semibold mb-10">
              {t("REGISTER_TEXT")}
            </span>
            <div className="flex gap-1 mb-2 mt-5">
              <img src={loginicon1} alt="" />
              <span className="text-lg font-semibold text-gray-600">
                {t("LOGIN_TEXT1")}
              </span>
            </div>
            <div className="flex gap-1 ">
              <img src={loginicon2} alt="" />
              <span className="text-lg font-semibold text-gray-600">
                {t("LOGIN_TEXT2")}
              </span>
            </div>
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "40px",
                gap: 1,
                textTransform: "none",
                marginTop: 6,
                border: "0.5px solid gray",
                color: "black",
              }}
              onClick={() => navigate("/create-content")}
            >
              <img src={googleicon} alt="" />
              <span>{t("GOOGLE_LOGIN")}</span>
            </Button>
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "40px",
                gap: 1,
                textTransform: "none",
                marginTop: 1,
                border: "0.5px solid gray",
                color: "black",
              }}
              onClick={() => navigate("/create-content")}
            >
              <img src={facebookicon} alt="" />
              <span>{t("FACEBOOK_LOGIN")}</span>
            </Button>
          </Box>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={5}>
          <img src={bannerlogin} alt="" />
        </Grid>
        <Grid
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "end" },
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="" className="text-base font-semibold text-purple-500">
              {t("FOOTER_TEXT1")}
            </a>
            <a href="" className="text-base font-semibold text-purple-500">
              {t("FOOTER_TEXT2")}
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
