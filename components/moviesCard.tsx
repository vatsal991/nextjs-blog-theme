import Image from "next/image";
import Link from "next/link";
import React from "react";

export type moviesCardType = {
  id: number;
  image: string;
  title: string;
  vote: string;
};

type props = {
  movies: moviesCardType;
};

const MoviesCard = ({ movies }: props) => {
  return (
    <div className="w-full bg-secondary rounded-xl overflow-hidden">
      <Link
        href={`/movie/${movies.id}`}
        className="movie-card block rounded-lg overflow-hidden"
      >
        <div className="relative rounded-t-xl overflow-hidden">
          <img
            className=" !h-[330px] movie-card-image w-full object-cover"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movies.image}`}
            alt=""
          />
        </div>
        <div className="p-2">
          <h2 className="mt-2 text-sm text-graymain font-bold text-center">
            Download {movies.title} [Full Movie] Hindi Dubbed (ORG) & English
            [Dual Audio] BluRay 1080p 720p 480p HD
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
