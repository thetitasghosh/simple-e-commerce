import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-20 border flex items-center justify-center">
      <h1>
        All right is reserved{" "}
        <span className="font-bold">
          <Link href={"https://twitter.com/thetitasghosh"}>@thetitasghosh</Link>
        </span>
      </h1>
    </div>
  );
};

export default Footer;
