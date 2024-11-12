"use client";
import { testSaree } from "@/db/sarees";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
const SareeGallary = ({ children, clickUrl }) => {
  const [imageUrl, setImageUrl] = useState("/images/01.jpg");
  const [defaultUrl, setDefaultUrl] = useState(clickUrl);
  const handleImageUrl = (src) => {
    setDefaultUrl(false);
    setImageUrl(src);
  };

  const randomImage = testSaree.sort(() => 0.5 - Math.random()).slice(0, 4);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[65rem] p-2 h-[40rem] z-[999]">
        <div className="w-full h-full redd flex items-center gap-1 justify-center">
          <div
            id="select-image"
            className="redd h-full flex flex-col items-center justify-center gap-4 p-1 w-60"
          >
            {randomImage.map((data, i) => {
              return (
                <div
                  onClick={() => handleImageUrl(data.src)}
                  id="mini-frame"
                  key={i}
                  className="w-full cursor-pointer rounded-md h-32 bg-zinc-200"
                >
                  <Image
                    alt="image"
                    className="w-full h-full object-cover"
                    height={500}
                    width={500}
                    src={data.src}
                  ></Image>
                </div>
              );
            })}
          </div>
          <div
            id="frame"
            className="redd flex items-center justify-center w-full h-full  p-8"
          >
            <div
              id="image"
              className="w-full h-[35rem] flex items-center justify-center bg-zinc-200 rounded-md"
            >
              <Image
                alt="image"
                className="w-full h-full  object-cover"
                height={500}
                width={500}
                src={defaultUrl ? defaultUrl : imageUrl}
              ></Image>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SareeGallary;
