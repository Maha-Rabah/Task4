import App from "./../App";
import Main from "./../modules/main/pages/Main";
import {news} from "./../modules/news/routes/NewsRoutes"
import {about} from "./../modules/about/routes/AboutRoutes";
import { courses } from "../modules/courses/routes/CoursesRouter";
import { teachers } from "../modules/teachers/routes/TeachersRouter";
import { students } from "../modules/students/routes/StudentsRouter";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
   ...news,
   ...about,
   ...courses,
   ...teachers,
   ...students,
    ],
  },
];
