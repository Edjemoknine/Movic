import { useQuery } from "react-query";
import {
  GetDiscoverTV,
  useGetAir,
  useGetPlayMovie,
  useGetPopMovie,
  useGetTOPR,
  useGetTopMovie,
  useGetUpComingMovie,
} from "../api/api";
import CardSlider from "../components/Slider";
import { Cardsettings } from "../utils/sliderSetting";
import Banner from "../components/Banner";
import { memo } from "react";
import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import Slider from "react-slick";
import TvCard from "../components/TvCard";

const Home = () => {
  const { data: tv } = useQuery({
    queryKey: ["series"],
    queryFn: () => GetDiscoverTV(1),
    keepPreviousData: true,
  });

  const { data: OnAir } = useGetAir();
  const { data: TopRTv } = useGetTOPR();

  const { data } = useGetPopMovie(1);
  const { data: topRated } = useGetTopMovie(1);
  const { data: playingNow } = useGetPlayMovie(1);
  const { data: upcoming, isLoading } = useGetUpComingMovie(1);
  const show = tv?.results[0];
  return (
    <>
      {/* <Suspense fallback={<BannerSkelton />}> */}
      <Banner data={data} isloading={isLoading} />
      {/* </Suspense> */}
      <section className="max-w-6xl mx-auto px-8 pb-10 ">
        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Upcoming Movies</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/genre/UpComing`}
          >
            See More
          </Link>
        </div>
        <CardSlider
          isLoading={isLoading}
          data={upcoming}
          settings={Cardsettings}
        />

        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Playing Now Movies</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/genre/PlayingNow`}
          >
            See More
          </Link>
        </div>
        <CardSlider
          isLoading={isLoading}
          data={playingNow}
          settings={Cardsettings}
        />

        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Most Popular Movies</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/genre/Popular`}
          >
            See More
          </Link>
        </div>
        <CardSlider isLoading={isLoading} data={data} settings={Cardsettings} />

        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Top Rated Movies</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/genre/TopRated`}
          >
            See More
          </Link>
        </div>
        <CardSlider
          isLoading={isLoading}
          data={topRated}
          settings={Cardsettings}
        />
        {/* ****************************** TV Shows********************************* */}

        <div
          className="w-full mt-10 relative md:h-[600px] h-[350px]"
          key={show?.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${show?.backdrop_path}`}
            alt="Shoes"
            className="object-cover absolute top-0 left-0 object-top w-full h-full"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute  flex flex-col gap-5 text-white max-w-6xl w-full left-6 md:left-16 top-1/2 -translate-y-1/2">
            <h1 className="md:text-6xl text-2xl font-bold mb-6 max-w-2xl">
              {show?.name}
            </h1>
            <div className="flex justify-between items-center">
              <p className="max-w-xs pr-14 md:max-w-xl">
                {show?.overview?.substring(0, 150)}
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
              {show?.genres?.map((gen) => (
                <p className="text-sm" key={gen?.name}>
                  {gen?.name}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-red-500 w-fit px-4 py-2 text-wrap font-semibold text-white">
                <Link to={`/detail/${show?.id}`}>Play Now</Link>
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
        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Most Popular Tv Shows</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/tv`}
          >
            See More
          </Link>
        </div>
        <Slider {...Cardsettings}>
          {tv?.results.map((card) => (
            <TvCard key={card.id} card={card} />
          ))}
        </Slider>

        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">On Air Series</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/tv`}
          >
            See More
          </Link>
        </div>

        <Slider {...Cardsettings}>
          {OnAir?.results.map((card) => (
            <TvCard key={card.id} card={card} />
          ))}
        </Slider>

        <div className="flex items-center justify-between">
          <h1 className="my-6 text-2xl font-semibold">Top Rated Series</h1>
          <Link
            className="text-xs bg-red-500 px-3 py-1 hover:bg-red-600"
            to={`/tv`}
          >
            See More
          </Link>
        </div>

        <Slider {...Cardsettings}>
          {TopRTv?.results.map((card) => (
            <TvCard key={card.id} card={card} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default memo(Home);
