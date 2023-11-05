import { getMoviesList } from "../utils/movies";
import MoviesCard, { moviesCardType } from "@/components/moviesCard";
import { Pagination } from "@/components/pagination";
import { Request } from "express";
import Head from "next/head";
import queryString from "query-string";

export default function Home({
  count,
  data,
}: {
  data: moviesCardType[];
  count: number;
}) {
  return (
    <>
      {data.length ? (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <link rel="profile" href="https://gmpg.org/xfn/11" />
            <link rel="icon" href="/logo/icon.png" type="image/x-icon" />
            <meta name="msapplication-TileImage" content="/logo/icon.png" />
            <link rel="apple-touch-icon-precomposed" href="/logo/icon.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black"
            />
            <title>
              MoviesDownload.website | MovieFlix-300mb Movies, 480p Movies ⋆
              Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com,
              moviesflix,MovieskiDuniya, Entertainment 720p Movies, 1080p
              movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies
            </title>
            <meta
              name="description"
              content="Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net ,MovieskiDuniya, Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
            />
            <link rel="canonical" href="https://moviesdownload.website" />
            <link rel="next" href="https://moviesdownload.website/?page=2" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="MoviesDownload.website | MoviesDownload-300mb Movies, 480p Movies ⋆
          Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com,
          moviesflix,MovieskiDuniya, Entertainment 720p Movies, 1080p movies,
          Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
            />
            <meta
              property="og:description"
              content="MoviesDOwnload.website,Movies Download,MoviesDOwnload,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net ,MovieskiDuniya, Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
            />
            <meta property="og:url" content="https://moviesdownload.website" />
            <meta
              property="og:site_name"
              content="MoviesDownload.website | MoviesDownload-300mb Movies, 480p Movies"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href="/logo/icon.png" sizes="32x32" />
            <link rel="icon" href="/logo/icon.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/logo/icon.png" />
            <meta name="msapplication-TileImage" content="/logo/icon.png" />
          </Head>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-11/12 sm:w-[80%] md:w-[80%] lg:w-[75%] m-auto mt-10 mb-10 gap-5 gap-y-8">
            {data &&
              data.map((movie, i) => (
                <MoviesCard movies={movie} key={movie.id} />
              ))}
          </div>

          <Pagination count={count} />
        </>
      ) : (
        <>
          <img
            src="/Empty.svg"
            className="w-[80vw] m-auto md:w-[500px] mt-10"
            alt=""
          />
          <h2 className="text-graymain text-center text-3xl font-semibold">
            Opps! nothing found
          </h2>
        </>
      )}
    </>
  );
}

export const getServerSideProps = async (context: Request) => {
  const query = queryString.stringify(context.query);
  const res = await getMoviesList(query);
  return { props: { data: res?.data, count: res?.count } };
};
