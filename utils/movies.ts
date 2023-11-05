import { moviesCardType } from "@/components/moviesCard";
import { moviesDetails } from "@/pages/movie/[id]";

type singleMovieType = {
  data: moviesDetails;
  related: moviesCardType;
};

const request = async <T>(url: string, config?: RequestInit) => {
  const res = await fetch(process.env.API_URL + url, { ...config });
  if (!res.ok) {
    return res.text().then((txt) => {
      throw new Error(txt);
    });
  }
  return res.json() as Promise<T>;
};

const get = (url: string, config?: RequestInit) => request(url, config);

export const getMoviesList = async (
  query?: string
): Promise<{ count: number; data: moviesCardType[] } | undefined> => {
  try {
    const moviesList = (await get(`/api/movies?${query || `page=1`}`)) as any;
    return {
      count: moviesList.count,
      data: moviesList.data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMovie = async (
  id: string
): Promise<singleMovieType | undefined> => {
  try {
    const movieDetail = (await get(`/api/movies/${id}`)) as singleMovieType;
    return movieDetail;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query: string) => {
  const resultMovies = await get(`/api/movies/${query}`);
  return resultMovies;
};

export const getAllCategoryList = async () => {};
