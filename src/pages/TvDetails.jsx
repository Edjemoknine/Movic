import { memo, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import {
  GetTVActing,
  GetTVReviews,
  GetTVSimilar,
  GetTVVideos,
  GetTvDetails,
} from "../api/api";

import { Heart, Home } from "lucide-react";
import Slider from "react-slick";
import {
  Bannersettings,
  Cardsettings,
  VidSettings,
} from "../utils/sliderSetting";
import ReactPlayer from "react-player";
import MovieCard from "../components/MovieCard";
import { useDispatch } from "react-redux";
import { addFavTv } from "../context/MovieSlice";
import BannerSkelton from "../Skeletons/BannerSkelton";
import CardSekeleton from "../Skeletons/CardSekeleton";
import Skeleton from "react-loading-skeleton";

const TvDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: video } = useQuery({
    queryKey: ["TVVideo", id],
    queryFn: () => GetTVVideos(id),
  });
  const [show, setShow] = useState(0);

  const { data: details, isLoading } = useQuery({
    queryKey: ["TvDetails", id],
    queryFn: () => GetTvDetails(id),
  });
  const { data: acters } = useQuery({
    queryKey: ["TVActing", id],
    queryFn: () => GetTVActing(id),
  });
  const { data: similair } = useQuery({
    queryKey: ["TVsimilair", id],
    queryFn: () => GetTVSimilar(id),
  });
  const { data: Reviews } = useQuery({
    queryKey: ["TVreviews", id],
    queryFn: () => GetTVReviews(id),
  });
  // console.log(details?.seasons);
  if (isLoading)
    return (
      <div>
        <BannerSkelton />
        <div className="px-16">
          <Slider className="my-6" {...Cardsettings}>
            {Array(10)
              .fill(0, 0)
              .map((card, i) => (
                <CardSekeleton key={i} />
              ))}
          </Slider>
          <Slider className="my-6" {...Cardsettings}>
            {Array(10)
              .fill(0, 0)
              .map((card, i) => (
                <CardSekeleton key={i} />
              ))}
          </Slider>
        </div>
        <div className="px-16">
          <BannerSkelton />
        </div>
        <div className="w-full my-6">
          <Skeleton className="mx-16 w-[80%]" height={170} borderRadius={30} />
        </div>
        <div className="px-16">
          <Slider {...Cardsettings}>
            {Array(10)
              .fill(0, 0)
              .map((card, i) => (
                <CardSekeleton key={i} />
              ))}
          </Slider>
        </div>
      </div>
    );
  return (
    <section>
      <div className="w-full relative  md:h-[600px] h-[750px]">
        <img
          src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
          alt="Shoes"
          className="object-cover absolute top-0 left-0 object-top w-full h-full"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="px-8 py-28 max-w-6xl relative z-40 mx-auto flex gap-6">
          <div className="flex-1 hidden md:flex h-[450px] rounded-md overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
              alt=""
            />
          </div>
          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="text-4xl ">
              {details?.name}{" "}
              {/* <span>({details?.release_date.substring(0, 4)})</span> */}
            </h1>
            <span>
              {details?.release_date}.{" "}
              {details?.genres.map((gen) => (
                <span className="ml-1" key={gen.id}>
                  {gen.name},
                </span>
              ))}
            </span>

            <div className=" flex items-center justify-center space-x-10">
              <div className="flex items-center gap-2 font-bold">
                <div
                  style={{
                    background: `conic-gradient(${
                      details?.vote_average * 10 < 50
                        ? "#f00"
                        : details?.vote_average * 10 === 50
                        ? "#0FF"
                        : "#0FC"
                    } ${details?.vote_average * 36}deg,#22222a 0deg)`,
                  }}
                  className="w-10 relative h-10 flex justify-center items-center bg-red-500 overflow-hidden rounded-full "
                >
                  <span className="absolute text-xs  flex justify-center items-center  w-9 h-9 rounded-full bg-black ">
                    {details?.vote_average.toFixed(1) * 10}%
                  </span>
                </div>
                <p className="text-xs">
                  User <br /> Score
                </p>
              </div>
              {/* <BookmarkCheck
                onClick={() => dispatch(addBookMark(details))}
                className="cursor-pointer hover:text-red-500"
              /> */}
              <Heart
                onClick={() => dispatch(addFavTv(details))}
                className="cursor-pointer hover:text-red-500"
              />
              <Link to={`${details?.homepage}`}>
                {" "}
                <Home className="cursor-pointer hover:text-red-500" />
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold my-2">Overview</h3>
              {details?.overview}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contributer</h3>
              <div className="flex text-xs items-center space-x-4 ">
                {details?.production_companies.map((con) => {
                  if (con.logo_path)
                    return (
                      <div className="flex flex-col items-center" key={con.id}>
                        <div className="w-10 h-10">
                          <img
                            src={`https://image.tmdb.org/t/p/original${con?.logo_path}`}
                            alt=""
                          />
                        </div>
                        <p>{con?.name}</p>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-semibold my-4">Top Billed Cast</h2>
        <Slider {...Cardsettings}>
          {acters?.cast.map((acter) => {
            if (acter.profile_path) {
              return (
                <div key={acter.id} className=" w-72 shadow-xl px-4  ">
                  <figure className="h-60">
                    <img
                      src={`https://image.tmdb.org/t/p/original${acter?.profile_path}`}
                      alt="acter"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className=" text-xs flex flex-col gap-1 py-2">
                    <p className="font-bold"> {acter.name}</p>
                    <p>{acter.character}</p>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
        <h2 className="text-2xl font-semibold my-4">Seasons</h2>
        <Slider {...Cardsettings}>
          {details?.seasons.map((season) => {
            if (season.poster_path) {
              return (
                <div key={season.id} className=" w-72 shadow-xl px-3   ">
                  <figure className="h-60">
                    <img
                      src={`https://image.tmdb.org/t/p/original${season?.poster_path}`}
                      alt="acter"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="  text-xs flex justify-between gap-1 py-2">
                    <div>
                      <p className="font-bold text-red-500"> {season.name}</p>
                      <p className="text-[9px]">{season.air_date}</p>
                    </div>
                    <div className="text-[9px]">
                      <p>{season.vote_average * 10}% voted</p>
                      <p>{season.episode_count} episode</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
        {video?.results.length > 0 && (
          <>
            {" "}
            <h2 className="text-2xl font-semibold my-4">Trailers</h2>
            <div>
              <div className="h-[420px] mb-3">
                <ReactPlayer
                  className="react-player"
                  url={`https://www.youtube.com/watch?v=${video?.results[show]?.key}`}
                  width="100%"
                  height="100%"
                />
              </div>

              <Slider {...VidSettings} className="carousel-item ">
                {video?.results.map((vid, i) => (
                  <div key={vid.id}>
                    <img
                      onClick={() => setShow(i)}
                      src={`https://i.ytimg.com/vi/${vid.key}/hqdefault.jpg`}
                      alt="Drink"
                      className="w-full h-full cursor-pointer"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )}
        {Reviews?.results.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold my-4">Reviews</h2>
            <div>
              <Slider {...Bannersettings}>
                {Reviews?.results.map((rev) => (
                  <div
                    className="bg-gray-950 mx-3 p-2 rounded-md border-gray-800 "
                    key={rev.id}
                  >
                    <div className="flex gap-2">
                      <div className="w-10 h-10">
                        <img
                          src={`https://image.tmdb.org/t/p/original${rev?.author_details.avatar_path}`}
                          alt=""
                        />
                      </div>
                      <p className="font-bold mb-2">
                        {rev?.author_details.username}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs">{rev.content.substring(0, 600)}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-semibold my-4">Similair</h2>
        <Slider {...Cardsettings}>
          {similair?.results.map((vid) => (
            <MovieCard key={vid.id} card={vid} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(TvDetails);
