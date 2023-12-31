import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white border border-transparent border-b-[#E6E6E6] shadow-sm flex justify-center">
      <div className="flex justify-between py-3 px-5 md:px-10 items-center w-full max-w-7xl">
        <Link href="/" className="text-2xl font-press text-brand-primary">
          SimLN
        </Link>
        <div className="flex gap-4">
          <Link
            href="/guide"
            className="hover:text-brand-primary hover:underline underline-offset-4 text-gray-800 font-medium"
          >
            Quickstart
          </Link>
          <Link
            href="https://github.com/bitcoin-dev-project/sim-ln"
            className="hover:text-brand-primary hover:underline underline-offset-4 text-gray-800 font-medium"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
