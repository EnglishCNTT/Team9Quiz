import React, { useState } from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  Typography,
  StepButton,
  Step,
  Stepper,
  Button,
  Grid,
} from "@mui/material";
import CustomizedSteppers from "../../components/CustomStepper";
import CustomizedBreadcrumbs from "../../components/CustomBreadcrumb";
import { FormatAlignLeft, Link, Topic } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const [isClickedTopic, setIsClickedTopic] = useState(true);
  const [isClickedText, setIsClickedText] = useState(false);
  const [isClickedLink, setIsClickedLink] = useState(false);

  const handleClickTopic = () => {
    setIsClickedTopic(true);
    setIsClickedText(false);
    setIsClickedLink(false);
  };

  const handleClickText = () => {
    setIsClickedTopic(false);
    setIsClickedText(true);
    setIsClickedLink(false);
  };

  const handleClickLink = () => {
    setIsClickedTopic(false);
    setIsClickedText(false);
    setIsClickedLink(true);
  };

  const [cate, setCate] = React.useState("");

  const handleChangeCate = (event) => {
    setCate(event.target.value);
    localStorage.setItem("topic", event.target.value);
  };

  const [language, setLanguage] = React.useState("");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Header isLogin="false" />
      <Container
        fixed
        sx={{
          paddingX: { xs: 2, md: 20 },
          paddingY: 5,
        }}
      >
        <CustomizedSteppers step={0} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 24 },
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#4F4F4F",
                }}
              >
                {t("CONTENT_HEADING")}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingX: 0,
                  paddingY: 5,
                  backgroundColor: "#f3f4f6",
                  color: isClickedTopic ? "#9061f9" : "inherit",
                  borderRadius: 3,
                  gap: 1,
                  border: isClickedTopic ? "0.5px solid #9061f9" : "none",
                  "&:hover, &:focus": {
                    border: "0.5px solid #9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  "&:active": {
                    borderColor: "#9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  transition: "background-color 0.3s, color 0.3s", // Thêm hiệu ứng chuyển động
                }}
                onClick={handleClickTopic}
              >
                <Topic fontSize="large" color="" />
                <span className="text-lg font-semibold">{t("TOPIC")}</span>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingX: 0,
                  paddingY: 5,
                  backgroundColor: "#f3f4f6",
                  color: isClickedText ? "#9061f9" : "inherit",
                  borderRadius: 3,
                  gap: 1,
                  border: isClickedText ? "0.5px solid #9061f9" : "none",
                  "&:hover, &:focus": {
                    border: "0.5px solid #9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  "&:active": {
                    borderColor: "#9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  transition: "background-color 0.3s, color 0.3s", // Thêm hiệu ứng chuyển động
                }}
                onClick={handleClickText}
              >
                <FormatAlignLeft fontSize="large" color="" />
                <span className="text-lg font-semibold">{t("TEXT")}</span>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingX: 0,
                  paddingY: 5,
                  backgroundColor: "#f3f4f6",
                  color: isClickedLink ? "#9061f9" : "inherit",
                  borderRadius: 3,
                  gap: 1,
                  border: isClickedLink ? "0.5px solid #9061f9" : "none",
                  "&:hover, &:focus": {
                    border: "0.5px solid #9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  "&:active": {
                    borderColor: "#9061f9",
                    cursor: "pointer",
                    color: "#9061f9",
                  },
                  transition: "background-color 0.3s, color 0.3s", // Thêm hiệu ứng chuyển động
                }}
                onClick={handleClickLink}
              >
                <Link fontSize="large" color="" />
                <span className="text-lg font-semibold">{t("LINK")}</span>
              </Box>
            </Grid>
            {isClickedTopic === true && (
              <Grid
                container
                spacing={1}
                sx={{
                  // backgroundColor: "#f4effe",
                  marginTop: 3,
                  marginLeft: 1,
                }}
              >
                <Grid item xs={12} md={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 700,
                      textAlign: "center",
                      color: "#4F4F4F",
                      marginBottom: 2,
                    }}
                  >
                    {t("TOPIC_QUES")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("TOPIC")}
                    </span>
                    <Select
                      value={cate}
                      onChange={handleChangeCate}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        width: "100%",
                      }}
                      size="small"
                    >
                      <MenuItem value="" disabled>
                        <em>{t("TOPIC")}</em>
                      </MenuItem>
                      <MenuItem value="ANIMAL">{t("ANIMAL")}</MenuItem>
                      <MenuItem value="MOVIES">{t("MOVIES")}</MenuItem>
                      <MenuItem value="MUSIC">{t("MUSIC")}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("LANGUAGE_CONTENT")}
                    </span>
                    <Select
                      defaultValue={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        width: "100%",
                      }}
                      size="small"
                    >
                      <MenuItem value="" disabled>
                        <em>{t("LANGUAGE_CONTENT")}</em>
                      </MenuItem>
                      <MenuItem value="ENGLISH">{t("ENGLISH")}</MenuItem>
                      <MenuItem value="VIETNAMESE">{t("VIETNAMESE")}</MenuItem>
                      <MenuItem value="FRENCH">{t("FRENCH")}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("SUBJECT")}
                    </span>
                    <Select
                      defaultValue={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        width: "100%",
                      }}
                      size="small"
                    >
                      <MenuItem value="" disabled>
                        <em>{t("SUBJECT")}</em>
                      </MenuItem>
                      <MenuItem value="SCIENCE">{t("SCIENCE")}</MenuItem>
                      <MenuItem value="HISTORY">{t("HISTORY")}</MenuItem>
                      <MenuItem value="GEOGRAPHY">{t("GEOGRAPHY")}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("LEVEL")}
                    </span>
                    <Select
                      defaultValue={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        width: "100%",
                      }}
                      size="small"
                    >
                      <MenuItem value="" disabled>
                        <em>{t("LEVEL")}</em>
                      </MenuItem>
                      <MenuItem value="EASY">{t("EASY")}</MenuItem>
                      <MenuItem value="MEDIUM">{t("MEDIUM")}</MenuItem>
                      <MenuItem value="HARD">{t("HARD")}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_CORRECT")}
                    </span>
                    <Input defaultValue={1} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_FALSE")}
                    </span>
                    <Input defaultValue={3} disabled />
                  </FormControl>
                </Grid>
                <Button
                  sx={{
                    backgroundColor: "#9061f9",
                    color: "white",
                    borderRadius: 2,
                    marginTop: 2,
                    marginLeft: 1,
                    ":hover": {
                      backgroundColor: "#9061f9",
                    },
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/create-content/questions")}
                >
                  {t("GENERATE_CONTENT")}
                </Button>
              </Grid>
            )}
            {isClickedText === true && (
              <Grid
                container
                spacing={1}
                sx={{
                  // backgroundColor: "#f4effe",
                  marginTop: 3,
                  marginLeft: 1,
                }}
              >
                <Grid item xs={12} md={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 700,
                      textAlign: "center",
                      color: "#4F4F4F",
                      marginBottom: 2,
                    }}
                  >
                    {t("TEXT_QUES")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <Input
                      multiline
                      rows={5}
                      placeholder={t("TEXT_PLACEHOLDER")}
                      sx={{
                        backgroundColor: "#f9fafb",
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_CORRECT")}
                    </span>
                    <Input defaultValue={1} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_FALSE")}
                    </span>
                    <Input defaultValue={3} disabled />
                  </FormControl>
                </Grid>
                <Button
                  sx={{
                    backgroundColor: "#9061f9",
                    color: "white",
                    borderRadius: 2,
                    marginTop: 2,
                    marginLeft: 1,
                    ":hover": {
                      backgroundColor: "#9061f9",
                    },
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/create-content/questions")}
                >
                  {t("GENERATE_CONTENT")}
                </Button>
              </Grid>
            )}
            {isClickedLink === true && (
              <Grid
                container
                spacing={1}
                sx={{
                  // backgroundColor: "#f4effe",
                  marginTop: 3,
                  marginLeft: 1,
                }}
              >
                <Grid item xs={12} md={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 700,
                      textAlign: "center",
                      color: "#4F4F4F",
                      marginBottom: 2,
                    }}
                  >
                    {t("LINK_QUES")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <Input
                      placeholder="https://www.team9quiz.com"
                      sx={{
                        backgroundColor: "#f9fafb",
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_CORRECT")}
                    </span>
                    <Input defaultValue={1} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <span className="text-sm font-medium mb-1">
                      {t("NUM_FALSE")}
                    </span>
                    <Input defaultValue={3} disabled />
                  </FormControl>
                </Grid>
                <Button
                  sx={{
                    backgroundColor: "#9061f9",
                    color: "white",
                    borderRadius: 2,
                    marginTop: 2,
                    marginLeft: 1,
                    ":hover": {
                      backgroundColor: "#9061f9",
                    },
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/create-content/questions")}
                >
                  {t("GENERATE_CONTENT")}
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CreateContent;
