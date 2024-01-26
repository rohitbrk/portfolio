import React from "react";
import SocialLinks from "./common/SocialLinks";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Rohith Bathula<a href="/" className="hover:underline"></a>
        </div>
        <div className="text-neutral-500 dark:text-neutral-100">
          <SocialLinks size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
