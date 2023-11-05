import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <img
        src="/404.svg"
        className="w-[80vw] m-auto md:w-[500px] mt-10"
        alt=""
      />
      <h2 className="text-graymain text-center text-3xl font-semibold">
        404! Page Not Found <br />
        <Link
          href="/"
          type="button"
          className="text-white bg-redmain mt-3 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          Home
        </Link>
      </h2>
    </>
  );
}
