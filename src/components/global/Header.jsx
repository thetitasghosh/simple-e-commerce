import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full border top-0 right-0 z-[9] bg-white fixed h-16 flex items-center justify-between px-20">
      <div id="logo" className="text-yellow-500 font-extrabold italic">
        <Link href={"/"}>
          <h1>Simple E-com</h1>
        </Link>
      </div>
      <div
        id="contact"
        className="w-auto flex items-center justify-center gap-5"
      >
        <p>re:8765325698</p>
        <p>8765325698</p>
      </div>
    </div>
  );
};

export default Header;
