import { About,Home, FilmDetail, Login, Profile } from "./pages";
import PopularTopRated from "./pages/PopularTopRated";




const routes = [
  { title: "Home", element: Home, path: "/", isNav: true },
  { title: "About", element: About, path: "/about", isNav: true },
  { title: "Login", element: Login, path: "/login", isNav: true },
  { title: "Profile", element: Profile, path: "/profile", isNav: true },
  { title: "Sort Filter", element: PopularTopRated, path: "/sort-filter/:category", isNav: true },
  { title: "Film Detail", element:FilmDetail, path: "/:movieId", isNav: false },
];

export default routes;