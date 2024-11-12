"use client";
import React from "react";
import { Button } from "../ui/button";
import SareeGallary from "@/components/features/SareeGallary";
import { useRouter } from "next/navigation";
import Image from "next/image";
const SareeFrame = ({ imageUrl }) => {
  const router = useRouter();
  return (
    <div className="w-80 h-96 border rounded-md p-1 flex flex-col items-center justify-center gap-1 bg-zinc-100">
      <SareeGallary clickUrl={imageUrl}>
        <div
          id="image"
          className="w-full cursor-pointer h-full border rounded-md bg-neutral-200"
        >
          <Image
            alt="pic "
            src={imageUrl}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </SareeGallary>
      <div id="buttons" className="w-full flex items-center justify-between">
        <Button onClick={() => router.push("/checkout")}>Shop now</Button>
        <Button
          variant={"secondary"}
          className="text-green-500 border border-green-500"
        >
          Whatsapp us
        </Button>
      </div>
    </div>
  );
};

export default SareeFrame;
