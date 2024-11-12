import React from "react";
import CatagorySelect from "@/components/features/CatagorySelect";
import SareeCatalog from "@/components/features/SareeCatalog";
const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-start ">
      <CatagorySelect />

      <SareeCatalog />
    </div>
  );
};

export default HeroSection;
