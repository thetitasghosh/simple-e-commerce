import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testSaree } from "@/db/sarees";
import SareeFrame from "@/components/features/SareeFrame";
const SareeCatalog = () => {
  return (
    <div className="w-full border min-h-96 flex px-10 p-5 items-center justify-start  gap-5 flex-col redd rounded-md">
      {/* <h1 className="w-full text-center text-xl">Saree Catalogs</h1> */}
      <h1 className="text-2xl w-full pl-5">handloom Saree</h1>
      <div
        id="saree-image"
        className="w-full ornn h-96 flex items-center p-1 justify-st "
      >
        <Carousel className="w-full h-full flex items-center justify-center redd">
          <CarouselContent className="h-full pl-10 redd w-full flex items-center ml-36 mr-36 justify-center">
            {testSaree.map((data, index) => (
              <CarouselItem
                key={index}
                className=" redd lg:basis-1/4 md:basis-2 w-full  h-full"
              >
                <SareeFrame imageUrl={data.src} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <SareeFrame /> */}
      </div>
      <div id="saree-details" className="h-52 w-full red"></div>
    </div>
  );
};

export default SareeCatalog;
