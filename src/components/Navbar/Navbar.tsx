"use client";

import Link from "next/link";
import IconWindmill from "../Icons/IconWindmill";

const Navbar = () => {
  return (
    <section className="p-2 pl-5 pr-5 flex justify-between items-center bg-main shadow-md fixed w-full z-20 top-0">
      <Link href="/" className="flex items-center gap-1">
        <span className="fill-white">
          <IconWindmill width={50} />
        </span>
        <h1 className="text-xl text-white font-medium tracking-wider">
          BEST Mostar
        </h1>
      </Link>

      <ul className="flex justify-between w-2/5 text-white tracking-wide">
        <li className="hover:underline relative">
          <h1 className="peer/nav cursor-pointer">O nama</h1>
          <div className="absolute p-5 bg-main z-30 top-5 right-0 hidden hover:flex flex-col gap-4 rounded-md text-sm w-[11rem] peer-hover/nav:flex">
            <Link href="/about" className="hover:underline">
              BEST Mostar
            </Link>
            <Link href="/about/teams" className="hover:underline">
              Timovi
            </Link>
            <Link
              href="https://www.best.eu.org/index.jsp"
              className="hover:underline"
            >
              BEST International
            </Link>
          </div>
        </li>
        <li className="hover:underline">
          <Link href="/about">Novosti</Link>
        </li>
        <li className="hover:underline relative">
          <Link href="/about">
            <h1 className="peer/projects cursor-pointer">Projekti</h1>
            <div className="absolute p-5 bg-main z-30 top-5 right-0 hidden hover:flex flex-col gap-4 rounded-md text-sm w-[11rem] peer-hover/projects:flex">
              <Link href="/about" className="hover:underline">
                Brucoski vodic
              </Link>
              <Link
                href="https://course22.bestmostar.org/"
                className="hover:underline"
              >
                Proljetni kurs
              </Link>
              <Link
                href="https://hackathon-bestmostar.org/"
                className="hover:underline"
              >
                Hackathon
              </Link>
            </div>
          </Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">Pridruzi nam se</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
