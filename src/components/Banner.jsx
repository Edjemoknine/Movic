/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { Bannersettings } from "../utils/sliderSetting";
import { useQueries } from "react-query";
import { GetDetails } from "../api/api";
import { PlayCircle } from "lucide-react";
import BannerSkelton from "../Skeletons/BannerSkelton";
import { Link } from "react-router-dom";

const Banner = ({ data, isloading }) => {
  const Details = useQueries(
    data
      ? data?.results?.map((M) => {
          return {
            queryKey: ["MD", M.id],
            queryFn: () => GetDetails(M.id),
            staleTime: Infinity,
            enabled: !!data,
          };
        })
      : []
  );

  if (isloading) return <BannerSkelton />;
  return (
    <section>
      <Slider {...Bannersettings}>
        {Details?.map((card, i) => (
          <div className="w-full relative h-[800px]" key={i}>
            <img
              src={`https://image.tmdb.org/t/p/original${card?.data?.backdrop_path}`}
              alt="Shoes"
              className="object-cover absolute top-0 left-0 object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute  flex flex-col gap-5 text-white max-w-6xl w-full left-6 md:left-[90px] top-1/2 -translate-y-1/2">
              <h1 className="md:text-6xl max-w-xs text-3xl font-bold mb-6 md:max-w-2xl">
                {card?.data?.title}
              </h1>
              <div className="flex justify-between items-center">
                <p className="max-w-xs sm:max-w-sm md:max-w-xl">
                  {card?.data?.overview?.substring(0, 150)}
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
                {card?.data?.genres?.map((gen) => (
                  <p className="text-sm" key={gen?.name}>
                    {gen?.name}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-red-500 w-fit px-4 py-2 text-wrap font-semibold text-white">
                  <Link to={`/detail/${card?.data?.id}`}>Play Now</Link>
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
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
