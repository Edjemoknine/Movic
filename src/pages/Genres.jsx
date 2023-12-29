import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetPlayMovie,
  useGetPopMovie,
  useGetTopMovie,
  useGetUpComingMovie,
} from "../api/api";
import MovieCard from "../components/MovieCard";
import Pgaination from "../components/Pgaination";

const Genres = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const { data: Polpular, isLoading } = useGetPopMovie(page);
  const { data: TopRated } = useGetTopMovie(page);
  const { data: PlayingNow } = useGetPlayMovie(page);
  const { data: UpComing } = useGetUpComingMovie(page);

  let Results;
  function GenresFiltred() {
    if (id === "Popular") {
      Results = Polpular;
    }
    if (id === "UpComing") {
      Results = UpComing;
    }
    if (id === "PlayingNow") {
      Results = PlayingNow;
    }
    if (id === "TopRated") {
      Results = TopRated;
    }

    return Results;
  }

  console.log(GenresFiltred());

  if (isLoading) return "Loading....";
  return (
    <section className=" max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl my-10 font-semibold">
        Your Results About <span className="text-red-500 font-bold"> {id}</span>{" "}
        :
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {GenresFiltred()?.results?.map((vid) => (
          <MovieCard card={vid} key={vid.id} />
        ))}
      </div>
      <Pgaination page={page} setPage={setPage} />
    </section>
  );
};

export default memo(Genres);
