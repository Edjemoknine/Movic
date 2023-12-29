import { useQuery } from "react-query";
import { GetDiscoverMovies, MOgenres, useGetTrendMovie } from "../api/api";
import { memo, useState } from "react";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Pgaination from "../components/Pgaination";
import CardSekeleton from "../Skeletons/CardSekeleton";
import BannerSkelton from "../Skeletons/BannerSkelton";
import Skeleton from "react-loading-skeleton";
import CardSlider from "../components/Slider";
import { Cardsettings } from "../utils/sliderSetting";

const Movies = () => {
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);
  const { data: trending, isLoading } = useQuery({
    queryKey: ["movies", page, genre, date],
    queryFn: () => GetDiscoverMovies(page, genre, date),
  });
  const { data: Trend } = useGetTrendMovie(2);
  const data = trending?.results[0];

  if (isLoading)
    return (
      <>
        <BannerSkelton />
        <div className="max-w-6xl mx-auto px-8 py-16">
          <Skeleton width={300} height={20} borderRadius={20} />
          <div
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-3
"
          >
            {Array(20)
              .fill(0, 0)
              ?.map((trend, i) => (
                <CardSekeleton key={i} />
              ))}
          </div>
        </div>
      </>
    );
  return (
    <section>
      <div className="w-full relative h-[600px]" key={data?.id}>
        <img
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          alt="Shoes"
          className="object-cover absolute top-0 left-0 object-top w-full h-full"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute  flex flex-col gap-5 text-white max-w-6xl w-full left-6 md:left-[90px] top-1/2 -translate-y-1/2">
          <h1 className="md:text-6xl text-3xl font-bold mb-6 max-w-2xl">
            {data?.title}
          </h1>
          <div className="flex justify-between items-center">
            <p className="max-w-xs md:max-w-xl">
              {data?.overview?.substring(0, 150)}
            </p>
            <div className="flex-1 hidden md:flex  justify-center">
              <div className="flex items-center duration-300 group cursor-pointer gap-6">
                <PlayCircle
                  size={80}
                  className="group-hover:text-red-500 duration-300"
                  strokeWidth={1}
                />
                <p className="text-3xl group-hover:text-red-500 duration-300 font-thin">
                  Watch Trailer
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-red-500 font-semibold">Genres:</p>
            {data?.genres?.map((gen) => (
              <p className="text-sm" key={gen?.name}>
                {gen?.name}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-red-500 w-fit px-4 py-2 text-wrap font-semibold text-white">
              <Link to={`/detail/${data?.id}`}>Play Now</Link>
            </button>
            <div className="flex md:hidden items-center duration-300 group cursor-pointer gap-6">
              <PlayCircle
                size={30}
                className="group-hover:text-red-500 duration-300"
                strokeWidth={1}
              />
              <p className=" group-hover:text-red-500 duration-300 font-thin">
                Watch Trailer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row mb-4 justify-between items-center">
          <h1 className="text-4xl font-bold my-6">Discover Movies</h1>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled>release_date</option>
            {Array(25)
              .fill(0, 0)
              .map((genre, i) => (
                <option key={i} value={i + 2000}>
                  {i + 2000}
                </option>
              ))}
          </select>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled>Genres</option>
            {MOgenres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-3
        "
        >
          {trending?.results.map((trend) => (
            <MovieCard key={trend.id} card={trend} />
          ))}
        </div>
        <Pgaination page={page} setPage={setPage} />
        <h1 className="text-4xl font-bold my-6">Trending Movies In 2023</h1>
        <CardSlider
          isLoading={isLoading}
          data={Trend}
          settings={Cardsettings}
        />
      </div>
    </section>
  );
};

export default memo(Movies);
