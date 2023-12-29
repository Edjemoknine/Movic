import axios from "axios";
import { useQuery } from "react-query";

const GetTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmYzMWI4YWFmZDczNTYwMTY5MWYyN2RiYzJkMDkyZCIsInN1YiI6IjY0YWVhMDZiOGEwZTliMDEzYWZlNjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.naKILKMaiH9Bvc24p1IJZCEAQElVpisxdOqF7S9T-x4",
  },
};

export const GetSearch = async (page, query) => {
  const res = await GetTMDB.get(
    `/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetTrendingMovies = async (page) => {
  const res = await GetTMDB.get(
    `trending/movie/day?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetTrendingTV = async (page) => {
  const res = await GetTMDB.get(
    `trending/tv/day?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetUpComingMovies = async (page) => {
  const res = await GetTMDB.get(
    `/movie/upcoming?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetTopRatedMovies = async (page) => {
  const res = await GetTMDB.get(
    `/movie/top_rated?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetUpPlayingNowMovies = async (page) => {
  const res = await GetTMDB.get(
    `/movie/now_playing?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};
export const GetPopularMovies = async (page) => {
  const res = await GetTMDB.get(
    `/movie/popular?language=en-US&page=${page}`,
    options
  );
  return await res.data;
};

// ---------------------------- Discover --------------------------------

export const GetDiscoverMovies = async (page, genre, data) => {
  const res = await GetTMDB.get(
    `/discover/movie?include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}&primary_release_year=${data}`,
    options
  );
  return await res.data;
};
export const GetDiscoverTV = async (page, genre) => {
  const res = await GetTMDB.get(
    `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
    options
  );
  return await res.data;
};
// *************************************TV series********************************
export const GetAiringTTV = async () => {
  const res = await GetTMDB.get(
    `/tv/on_the_air?language=en-US&page=1`,
    options
  );
  return await res.data;
};
export const GetTOPRTV = async () => {
  const res = await GetTMDB.get(`/tv/top_rated?language=en-US&page=1`, options);
  return await res.data;
};

export const useGetTOPR = () => {
  return useQuery(["TOPRTv"], () => GetTOPRTV());
};
export const useGetAir = () => {
  return useQuery(["OnAir"], () => GetAiringTTV());
};

// ************Movie Details****************************

export const GetDetails = async (id) => {
  const res = await GetTMDB.get(`/movie/${id}?language=en-US`, options);
  return await res.data;
};
export const GetSimilar = async (id) => {
  const res = await GetTMDB.get(
    `/movie/${id}/similar?language=en-US&page=1`,
    options
  );
  return await res.data;
};
export const GetActing = async (id) => {
  const res = await GetTMDB.get(`/movie/${id}/credits?language=en-US`, options);
  return await res.data;
};
export const GetVideos = async (id) => {
  const res = await GetTMDB.get(`/movie/${id}/videos?language=en-US`, options);
  return await res.data;
};
export const GetVideoReviews = async (id) => {
  const res = await GetTMDB.get(
    `/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return await res.data;
};
// *********************** Tv Show details ***********************
export const GetTvDetails = async (id) => {
  const res = await GetTMDB.get(`/tv/${id}?language=en-US'`, options);
  return await res.data;
};
export const GetTVSimilar = async (id) => {
  const res = await GetTMDB.get(
    `/tv/${id}/similar?language=en-US&page=1`,
    options
  );
  return await res.data;
};
export const GetTVActing = async (id) => {
  const res = await GetTMDB.get(`/tv/${id}/credits?language=en-US`, options);
  return await res.data;
};
export const GetTVVideos = async (id) => {
  const res = await GetTMDB.get(`/tv/${id}/videos?language=en-US`, options);
  return await res.data;
};
export const GetTVReviews = async (id) => {
  const res = await GetTMDB.get(
    `/tv/${id}/reviews?language=en-US&page=1`,
    options
  );
  return await res.data;
};

// **************/movie/572802/credits?language=en-US***************************************

export const MOgenres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const Tvgeners = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];
///////////////////////////////////////////////
export const useGetPopMovie = (page, genre) => {
  return useQuery(["PoplularMovies", page, genre], () =>
    GetPopularMovies(page, genre)
  );
};
export const useGetPlayMovie = (page, genre) => {
  return useQuery(["PlayingMovies", page, genre], () =>
    GetUpPlayingNowMovies(page, genre)
  );
};
export const useGetUpComingMovie = (page, genre) => {
  return useQuery(["UpComingMovies", page, genre], () =>
    GetUpComingMovies(page, genre)
  );
};
export const useGetTopMovie = (page, genre) => {
  return useQuery(["TopMovies", page, genre], () =>
    GetTopRatedMovies(page, genre)
  );
};
export const useGetTrendMovie = (page) => {
  return useQuery(["Trending", page], () => GetTrendingMovies(page));
};
export const useGetTrendTv = (page) => {
  return useQuery(["TrendingTv", page], () => GetTrendingTV(page));
};
