import React, { useState } from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { Search, Edit, Delete } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

const MyCourses = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");

  // Danh sách khoá học
  const courses = [
    { id: 1, name: "React Basics" },
    { id: 2, name: "JavaScript Fundamentals" },
    { id: 3, name: "Thổi nến cùng thầy Huy" },
    { id: 4, name: "Python for Beginners" },
    { id: 5, name: "Làm thơ cùng thầy English" },
    { id: 6, name: "C# Crash Course" },
    { id: 7, name: "Học bơi cùng thầy Thái" },

  ];

  // State cho ô tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách khoá học dựa trên ô tìm kiếm
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Chức năng sửa khoá học
  const handleEditCourse = (courseId) => {
    // Thực hiện hành động sửa
    console.log(`Edit course with ID ${courseId}`);
  };

  // Chức năng xoá khoá học
  const handleDeleteCourse = (courseId) => {
    // Thực hiện hành động xoá
    console.log(`Delete course with ID ${courseId}`);
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
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, md: 24 },
              fontWeight: 700,
              textAlign: "start",
              color: "#4F4F4F",
            }}
          >
            {t("MY_COURSES")}
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            placeholder={t("SEARCH_PLACEHOLDER")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          {/* Danh sách khoá học */}
          <List
            sx={{
              width: "100%",
            }}
          >
            {filteredCourses.map((course) => (
              <ListItem
                key={course.id}
                button
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItemText primary={course.name} />
                <div>
                  <IconButton
                    onClick={() => handleEditCourse(course.id)}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteCourse(course.id)}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={10}
              variant="outlined"
              color="secondary"
              sx={{
                marginTop: 2,
                marginBottom: 2,
              }}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default MyCourses;
