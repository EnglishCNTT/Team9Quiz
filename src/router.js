import LoginPage from "./features/auth/LoginPage";
import MyCourses from "./features/courses/MyCourses";
import CreateContent from "./features/createcontent/CreateContent";
import QuestionsPage from "./features/createcontent/QuestionsPage";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  loginPage: {
    path: "/",
    component: (props) => injectProps(props, LoginPage),
    title: "Login",
    description: "Login Page",
  },
  createContent: {
    path: "/create-content",
    component: (props) => injectProps(props, CreateContent),
    title: "Create Content",
    description: "Create Content Page",
  },
  myCourses: {
    path: "/my-courses",
    component: (props) => injectProps(props, MyCourses),
    title: "My Courses",
    description: "My Courses Page",
  },
  questionsPage: {
    path: "/create-content/questions",
    component: (props) => injectProps(props, QuestionsPage),
    title: "Questions",
    description: "Questions Page",
  },
};

export const paths = [
  {
    category: "Login",
    to: routes.loginPage.path,
    name: routes.loginPage.title,
    key: "Login",
  },
  {
    category: "Create Content",
    to: routes.createContent.path,
    name: routes.createContent.title,
    key: "Create Content",
  },
  {
    category: "My Courses",
    to: routes.myCourses.path,
    name: routes.myCourses.title,
    key: "My Courses",
  },
  {
    category: "Questions",
    to: routes.questionsPage.path,
    name: routes.questionsPage.title,
    key: "Questions",
  },
];
