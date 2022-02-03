import { About,Home, FilmDetail, Login, Profile } from "./pages";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";





const routes = [
  { title: "Home", element: Home, path: "/", isNav: true },
  { title: "About", element: About, path: "/about", isNav: true },
  { title: "Login", element: Login, path: "/login", isNav: true },
  { title: "Profile", element: Profile, path: "/profile", isNav: true },
  { title: "Popular", element: Popular, path: "/popular", isNav: true },
  { title: "Top Rated", element: TopRated, path: "/top-rated", isNav: true },
  { title: "Film Detail", element:FilmDetail, path: "/:movieId", isNav: false },
];

export default routes;