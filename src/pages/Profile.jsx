import { useDispatch, useSelector } from "react-redux";
import showTime from "../assets/showTime.jpg";
import MovieCard from "../components/MovieCard";
import TvCard from "../components/TvCard";
import { ClearFavMovie, ClearFavTv } from "../context/MovieSlice";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import avatar from "../assets/user.png";
import { memo } from "react";

const Profile = () => {
  const { login, register } = useKindeAuth();

  const { user, isAuthenticated, logout } = useKindeAuth();

  console.log(isAuthenticated);
  console.log(user);
  // **************************
  const { favoriteMovies, favoriteTv } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="w-full relative h-[500px]">
        <img
          className="w-full object-bottom h-full object-cover"
          src={showTime}
          alt="profile banner"
        />
        <div className="absolute max-w-xs rounded-xl w-full  text-center text-white z-20 right-20 top-1/2 bg-black/70">
          <div className="relative p-6  flex flex-col items-center  gap-3">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={avatar}
              alt="avatar"
            />
            <h2>{user?.given_name} </h2>
            <p>{user?.email}</p>
            <button
              className="bg-red-500 px-3 py-1.5"
              onClick={logout}
              type="button"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
      {!isAuthenticated ? (
        <div className="flex justify-center items-center gap-6 py-10">
          <button onClick={register} type="button">
            Register
          </button>
          <button onClick={login} type="button">
            Log In
          </button>
        </div>
      ) : (
        <div>
          <div className="max-w-6xl mx-auto p-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Favorite Movies </h1>
              <button
                onClick={() => dispatch(ClearFavMovie())}
                className="text-white bg-red-500 px-3 py-1.5 text-xs"
              >
                Clear all
              </button>
            </div>
            <div className="grid grid-cols-2 min-h-60 md:grid-cols-6 my-6 gap-4">
              {favoriteMovies.length == 0
                ? "There No Fav Movie"
                : favoriteMovies.map((fav) => (
                    <MovieCard card={fav} key={fav.id} />
                  ))}
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Favorite Tv Shows</h1>
              <button
                onClick={() => dispatch(ClearFavTv())}
                className="text-white bg-red-500 px-3 py-1.5 text-xs"
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-2 min-h-60 md:grid-cols-6 my-6 gap-4">
              {favoriteTv.length == 0
                ? "There no Fav Tv Show"
                : favoriteTv.map((fav) => <TvCard card={fav} key={fav.id} />)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Profile);
