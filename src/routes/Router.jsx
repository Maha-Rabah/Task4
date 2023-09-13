import App from "./../App";
import Main from "./../modules/main/pages/Main";
import {news} from "./../modules/news/routes/NewsRoutes"
import {about} from "./../modules/about/routes/AboutRoutes";

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
    ],
  },
];
