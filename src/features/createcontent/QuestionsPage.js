import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  Grid,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Button,
  Box,
} from "@mui/material";
import CustomizedSteppers from "../../components/CustomStepper";
import { useNavigate } from "react-router-dom";
import { Download, Save } from "@mui/icons-material";
import memewait from "../../assets/images/memewait.gif";

const QuestionsPage = () => {
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const topic = localStorage.getItem("topic");

  const animalQuestions = [
    {
      id: 1,
      text: "What is the lifespan of an elephant?",
      options: ["30-40 years", "50-60 years", "70-80 years", "90-100 years"],
      correctAnswer: "70-80 years",
    },
    {
      id: 2,
      text: "Which animal is known as the 'King of the Jungle'?",
      options: ["Lion", "Tiger", "Elephant", "Giraffe"],
      correctAnswer: "Lion",
    },
    {
      id: 3,
      text: "What is the only continent where giraffes live in the wild?",
      options: ["Africa", "Asia", "North America", "South America"],
      correctAnswer: "Africa",
    },
    {
      id: 4,
      text: "Which species of monkey is known for its colorful face and buttocks?",
      options: [
        "Capuchin Monkey",
        "Howler Monkey",
        "Mandrill",
        "Spider Monkey",
      ],
      correctAnswer: "Mandrill",
    },
    {
      id: 5,
      text: "What is the fastest bird on Earth?",
      options: ["Peregrine Falcon", "Ostrich", "Bald Eagle", "Hawk"],
      correctAnswer: "Peregrine Falcon",
    },
    {
      id: 6,
      text: "Which ocean is home to the largest variety of whales?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      id: 7,
      text: "What is the primary diet of a panda?",
      options: ["Bamboo", "Meat", "Fruits", "Insects"],
      correctAnswer: "Bamboo",
    },
    {
      id: 8,
      text: "Which big cat is known for its distinctive black and orange stripes?",
      options: ["Leopard", "Cheetah", "Tiger", "Jaguar"],
      correctAnswer: "Tiger",
    },
    {
      id: 9,
      text: "What is the largest species of bear?",
      options: ["Black Bear", "Polar Bear", "Grizzly Bear", "Sun Bear"],
      correctAnswer: "Polar Bear",
    },
    {
      id: 10,
      text: "Which animal is capable of rotating its head up to 270 degrees?",
      options: ["Owl", "Eagle", "Hawk", "Falcon"],
      correctAnswer: "Owl",
    },
  ];

  const moviesQuestions = [
    {
      id: 1,
      text: "Who directed the movie 'The Shawshank Redemption'?",
      options: [
        "Martin Scorsese",
        "Christopher Nolan",
        "Frank Darabont",
        "Steven Spielberg",
      ],
      correctAnswer: "Frank Darabont",
    },
    {
      id: 2,
      text: "Which actor played the lead role in the movie 'Forrest Gump'?",
      options: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
      correctAnswer: "Tom Hanks",
    },
    {
      id: 3,
      text: "What is the highest-grossing film of all time (as of 2022)?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
      correctAnswer: "Avengers: Endgame",
    },
    {
      id: 4,
      text: "Which film won the Academy Award for Best Picture in 2021?",
      options: [
        "Nomadland",
        "The Trial of the Chicago 7",
        "Minari",
        "Promising Young Woman",
      ],
      correctAnswer: "Nomadland",
    },
    {
      id: 5,
      text: "Who played the character Jack Dawson in the movie 'Titanic'?",
      options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"],
      correctAnswer: "Leonardo DiCaprio",
    },
    {
      id: 6,
      text: "Which film is known for the line 'Here's looking at you, kid.'?",
      options: [
        "Casablanca",
        "Gone with the Wind",
        "The Godfather",
        "Citizen Kane",
      ],
      correctAnswer: "Casablanca",
    },
    {
      id: 7,
      text: "Who directed the science fiction film 'Blade Runner'?",
      options: [
        "Steven Spielberg",
        "Ridley Scott",
        "James Cameron",
        "George Lucas",
      ],
      correctAnswer: "Ridley Scott",
    },
    {
      id: 8,
      text: "Which actor starred as Tony Stark in the 'Iron Man' film series?",
      options: [
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
      ],
      correctAnswer: "Robert Downey Jr.",
    },
    {
      id: 9,
      text: "What is the name of the fictional African country in the movie 'Black Panther'?",
      options: ["Wakanda", "Zamunda", "Genovia", "Elbonia"],
      correctAnswer: "Wakanda",
    },
    {
      id: 10,
      text: "Which film won the Academy Award for Best Animated Feature in 2020?",
      options: [
        "Toy Story 4",
        "Frozen II",
        "How to Train Your Dragon: The Hidden World",
        "Soul",
      ],
      correctAnswer: "Soul",
    },
  ];

  const musicQuestions = [
    {
      id: 1,
      text: "Which artist released the album 'Abbey Road'?",
      options: ["The Beatles", "Elvis Presley", "Michael Jackson", "Queen"],
      correctAnswer: "The Beatles",
    },
    {
      id: 2,
      text: "Who is known as the 'Queen of Pop'?",
      options: ["Madonna", "Beyoncé", "Lady Gaga", "Rihanna"],
      correctAnswer: "Madonna",
    },
    {
      id: 3,
      text: "What instrument did Jimi Hendrix play?",
      options: ["Guitar", "Piano", "Drums", "Violin"],
      correctAnswer: "Guitar",
    },
    {
      id: 4,
      text: "Which band is known for the song 'Bohemian Rhapsody'?",
      options: ["The Rolling Stones", "Queen", "Led Zeppelin", "The Who"],
      correctAnswer: "Queen",
    },
    {
      id: 5,
      text: "Who wrote the song 'Imagine'?",
      options: [
        "John Lennon",
        "Paul McCartney",
        "George Harrison",
        "Ringo Starr",
      ],
      correctAnswer: "John Lennon",
    },
    {
      id: 6,
      text: "Which artist is often referred to as the 'King of Pop'?",
      options: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Bieber"],
      correctAnswer: "Michael Jackson",
    },
    {
      id: 7,
      text: "What is the best-selling female album artist of all time?",
      options: ["Whitney Houston", "Celine Dion", "Mariah Carey", "Adele"],
      correctAnswer: "Whitney Houston",
    },
    {
      id: 8,
      text: "Which genre is associated with artists like Johnny Cash and Dolly Parton?",
      options: ["Country", "Hip Hop", "Jazz", "Rock"],
      correctAnswer: "Country",
    },
    {
      id: 9,
      text: "What is the title of Elvis Presley's debut studio album?",
      options: [
        "Elvis Presley",
        "Love Me Tender",
        "Heartbreak Hotel",
        "Blue Suede Shoes",
      ],
      correctAnswer: "Elvis Presley",
    },
    {
      id: 10,
      text: "Which song has the record for the longest-running No. 1 hit on the Billboard Hot 100?",
      options: [
        "Old Town Road",
        "Despacito",
        "I Will Always Love You",
        "Shape of You",
      ],
      correctAnswer: "Old Town Road",
    },
  ];

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Set questions based on the selected topic
    switch (topic) {
      case "ANIMAL":
        setQuestions(randomSelectQuestions(animalQuestions));
        break;
      case "MOVIES":
        setQuestions(randomSelectQuestions(moviesQuestions));
        break;
      case "MUSIC":
        setQuestions(randomSelectQuestions(musicQuestions));
        break;
      default:
        setQuestions([]);
    }
  }, [topic]);

  const randomSelectQuestions = (questionsArray) => {
    const numberOfQuestionsToDisplay = 5; // Adjust the number of questions to display
    const shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberOfQuestionsToDisplay);
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
        <CustomizedSteppers step={1} />

        {showScreen === true ? (
          <Container
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
                  {t("QUESTIONS")}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: { xs: 0, md: 18 },
                  }}
                >
                  {questions.map((question) => (
                    <div key={question.id}>
                      <Typography>{question.text}</Typography>
                      <FormControl component="fieldset">
                        <RadioGroup>
                          {question.options.map((option, index) => (
                            <FormControlLabel
                              key={index}
                              control={
                                <Radio
                                  value={option}
                                  checked={option === question.correctAnswer} // Kiểm tra xem option có phải là đáp án đúng không
                                />
                              }
                              label={option}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  ))}
                  <Button
                    startIcon={<Download />}
                    sx={{
                      backgroundColor: "white",
                      color: "#9061f9",
                      borderRadius: 2,
                      border: "0.5px solid #9061f9",
                      marginTop: 2,
                      ":hover": {
                        backgroundColor: "#white",
                      },
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/my-courses")}
                  >
                    {t("EXPORT")}
                  </Button>
                  <Button
                    startIcon={<Save />}
                    sx={{
                      backgroundColor: "#9061f9",
                      color: "white",
                      borderRadius: 2,
                      border: "0.5px solid white",
                      marginTop: 2,
                      marginLeft: 1,
                      ":hover": {
                        backgroundColor: "#9061f9",
                      },
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/my-courses")}
                  >
                    {t("SAVE")}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <img src={memewait} alt="" />
          </Box>
        )}
      </Container>
    </>
  );
};

export default QuestionsPage;
