import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import TvDetails from "./pages/TvDetails";
import Profile from "./pages/Profile";
// import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Genres from "./pages/Genres";
import Search from "./pages/Search";

function App() {
  return (
    <main>
      <Navbar />
      <SkeletonTheme
        enableAnimation="true"
        baseColor="#202020"
        highlightColor="#444"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/tv/:id" element={<TvDetails />} />
          <Route path="/genre/:id" element={<Genres />} />
          <Route path="/search/:term" element={<Search />} />
        </Routes>
      </SkeletonTheme>
      <Footer />
    </main>
  );
}

export default App;
