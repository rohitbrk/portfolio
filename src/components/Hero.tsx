"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left my-6 py-16 sm:py-32 md:py-44 md:space-x-4">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
            Hey, I&#39;m Rohith!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span className="font-semibold text-blue-600">
              Software Engineer{" "}
            </span>
            at <span className="font-semibold text-blue-600">OpenText</span>,
            based in Bengaluru, India. A Tech Enthusiast working towards
            building reliable products.
          </p>
          <Link
            href="/#projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-700 rounded shadow hover:bg-blue-800 cursor-pointer"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link href="/#about">
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
