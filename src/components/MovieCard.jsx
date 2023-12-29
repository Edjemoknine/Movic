/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Trash2 } from "lucide-react";
import { addFavMovie, removeFavMovie } from "../context/MovieSlice";

const MovieCard = ({ card }) => {
  const dispatch = useDispatch();
  const { favoriteMovies } = useSelector((store) => store.movie);
  const saved = favoriteMovies.find((fav) => fav.id === card.id);
  return (
    <div className=" hover:z-10 h-64 relative group overflow-hidden hover:scale-110 duration-300 cursor-pointer mx-1 bg-base-100 shadow-xl">
      <img
        src={`https://image.tmdb.org/t/p/original${card.poster_path}`}
        alt="Shoes"
        className="z-10"
      />
      <div className="absolute top-6 group-hover:right-7 -right-6 flex gap-3 flex-col duration-300">
        <Heart
          onClick={() => dispatch(addFavMovie(card))}
          className={`${
            saved && "text-red-500"
          } z-20 relative cursor-pointer hover:text-red-500`}
        />
        <Trash2
          onClick={() => dispatch(removeFavMovie(card.id))}
          className={`${
            saved ? "flex" : "hidden"
          } z-20 relative cursor-pointer hover:text-red-500`}
        />
      </div>

      <div className="absolute inset-0 bg-black/60 hidden group-hover:flex duration-300"></div>
      <div className=" z-20 p-2 absolute -bottom-40 group-hover:bottom-10 duration-300 flex-col flex gap-2 text-white left-3  text-centr">
        <h2 className="font-semibold text-sm ">{card.title || card.name}</h2>
        <p className="text-xs">{card.release_date}</p>
        <Link to={`/detail/${card.id}`}>
          <button className="bg-red-500 text-xs w-fit text-white p-1">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
