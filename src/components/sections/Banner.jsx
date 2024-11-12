"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Banner = () => {
  let path = usePathname();
  return (
    <>
      {path === "/" ? (
        <div className="w-full mt-20 h-36 red rounded-md flex items-center justify-center">
          <h1>Banner</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
