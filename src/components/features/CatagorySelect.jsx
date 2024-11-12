import React from "react";
import Catagory from "@/components/features/Catagory";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const CatagorySelect = () => {
  return (
    <div className="w-full min-h-24  flex flex-col items-center justify-start gap-5">
      <h1 className="w-full text-center pt-10 font-black">Catagory</h1>
      <div className="w-full redd h-full flex items-center gap-5 justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full redd max-w-7xl"
        >
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <Catagory key={index} num={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* {Array.from({ length: 30 }).map((_, i) => {
          return <Catagory key={i} num={i} />;
        })} */}
      </div>
    </div>
  );
};

export default CatagorySelect;
