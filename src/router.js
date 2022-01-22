import { About,Home, FilmDetail, Login, Profile } from "./pages";

const routes = [
  { title: "Home", element: Home, path: "/", isNav: true },
  { title: "About", element: About, path: "/about", isNav: true },
  { title: "Login", element: Login, path: "/login", isNav: true },
  { title: "Profile", element: Profile, path: "/profile", isNav: true },
  { title: "Film Detail", element:FilmDetail, path: "/movies/movieId", isNav: false },
];

export default routes;