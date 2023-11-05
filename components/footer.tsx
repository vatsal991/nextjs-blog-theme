import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-bold  uppercase text-white">
              All Categories
            </h2>
            <ul className="text-graymain  font-medium">
              <li className="mb-4">
                <Link
                  href="/?category=Action&page=1"
                  className=" hover:underline"
                >
                  Action
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Adventure&page=1"
                  className="hover:underline"
                >
                  Adventure
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Science Fiction&page=1"
                  className="hover:underline"
                >
                  Science Fiction
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Animation&page=1"
                  className="hover:underline"
                >
                  Animation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase text-transparent">
              .
            </h2>
            <ul className="text-graymain  font-medium">
              <li className="mb-4">
                <Link
                  href="/?category=Comedy&page=1"
                  className="hover:underline"
                >
                  Comedy
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Drama&page=1"
                  className="hover:underline"
                >
                  Drama
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Mystery&page=1"
                  className="hover:underline"
                >
                  Mystery
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Crime&page=1"
                  className="hover:underline"
                >
                  Crime
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase text-transparent">
              .
            </h2>
            <ul className="text-graymain  font-medium">
              <li className="mb-4">
                <Link
                  href="/?category=Horror&page=1"
                  className="hover:underline"
                >
                  Horror
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Thriller&page=1"
                  className="hover:underline"
                >
                  Thriller
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Mystery&page=1"
                  className="hover:underline"
                >
                  Mystery
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Fantasy&page=1"
                  className="hover:underline"
                >
                  Fantasy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase text-transparent">
              .
            </h2>
            <ul className="text-graymain  font-medium">
              <li className="mb-4">
                <Link
                  href="/?category=Romance&page=1"
                  className="hover:underline"
                >
                  Romance
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Documentary&page=1"
                  className="hover:underline"
                >
                  Documentary
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/?category=War&page=1" className="hover:underline">
                  War
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/?category=Western&page=1"
                  className="hover:underline"
                >
                  Western
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-secondary md:flex md:items-center md:justify-between">
          <span className="text-sm text-graymain dark:text-gray-300 sm:text-center">
            © 2023 <Link href="/">Movies Download™</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
