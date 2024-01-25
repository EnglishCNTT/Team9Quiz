import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import i18n from "../locales/i18n";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import logoteam9 from "../assets/images/logoteam9.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const defaultLng = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(defaultLng);
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    localStorage.setItem("language", languageValue);
    setLanguage(languageValue);
    i18n.changeLanguage(languageValue);
  };
  const pages = [t("CREATE_CONTENT"), t("MY_COURSES")];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOptionBar = (option) => {
    if (option === t("CREATE_CONTENT")) navigate("/create-content");
    else if (option === t("MY_COURSES")) navigate("/my-courses");
  };

  return (
    <>
      <AppBar class={`bg-white w-full header`} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: 1,
          }}
          disableGutters
          className="header-toolbar"
        >
          <img
            src={logoteam9}
            alt=""
            onClick={() => navigate("/create-content")}
            className="cursor-pointer"
          />
          <div className="flex gap-3">
            {props?.isLogin === "true" ? (
              <Box className="flex items-center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Select
                    name="language"
                    className="language"
                    inputProps={{
                      id: "open-select",
                    }}
                    size="small"
                    value={language}
                    onChange={changeLanguage}
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <MenuItem value="en">
                      <div className="flex items-center">
                        <span className="ml-1 font-bold">EN</span>
                      </div>
                    </MenuItem>
                    <MenuItem value="vi">
                      <div className="flex items-center">
                        <span className="ml-1 font-bold">VI</span>
                      </div>
                    </MenuItem>
                  </Select>
                </Box>
              </Box>
            ) : (
              <React.Fragment>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => handleOptionBar(page)}
                      sx={{
                        color: "black",
                        display: "block",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                          color: "#B198F8",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => handleOptionBar(page)}
                        sx={{
                          "&:hover": {
                            color: "#B198F8",
                            backgroundColor: "white",
                          },
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => navigate("/")}
                >
                  <Logout />
                </IconButton>
                <Box className="flex items-center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Select
                      name="language"
                      className="language"
                      inputProps={{
                        id: "open-select",
                      }}
                      size="small"
                      value={language}
                      onChange={changeLanguage}
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      <MenuItem value="en">
                        <div className="flex items-center">
                          <span className="ml-1 font-bold">EN</span>
                        </div>
                      </MenuItem>
                      <MenuItem value="vi">
                        <div className="flex items-center">
                          <span className="ml-1 font-bold">VI</span>
                        </div>
                      </MenuItem>
                    </Select>
                  </Box>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default Header;
