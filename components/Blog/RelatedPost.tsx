import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: number;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative">
          <img
            src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${image}`}
            alt={title}
            className="object-cover h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={`/movie/${slug}`}
            className="mb-[6px] block text-base font-medium leading-snug text-graymain hover:text-redmain dark:text-white dark:hover:text-redmain"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-graymain">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
