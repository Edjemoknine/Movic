import { memo, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GetSearch } from "../api/api";
import MovieCard from "../components/MovieCard";
import Pgaination from "../components/Pgaination";
import CardSekeleton from "../Skeletons/CardSekeleton";
// import BannerSkelton from "../Skeletons/BannerSkelton";
import Skeleton from "react-loading-skeleton";

const Search = () => {
  const { term } = useParams();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["Search", page, term],
    queryFn: () => GetSearch(page, term),
  });
  if (isLoading)
    return (
      <>
        {/* <BannerSkelton /> */}
        <div className="max-w-6xl mx-auto px-8 py-16">
          <Skeleton
            width={300}
            height={20}
            borderRadius={20}
            className="my-6"
          />
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
    <section className="max-w-6xl mx-auto py-20 px-8">
      <h1 className="text-4xl my-10 font-semibold">
        Your Search Results about{" "}
        <span className="text-red-500 font-bold"> {term}</span> :
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.results.map((result) => {
          if (result.poster_path)
            return <MovieCard key={result.id} card={result} />;
        })}
      </div>
      <Pgaination page={page} setPage={setPage} />
    </section>
  );
};

export default memo(Search);
