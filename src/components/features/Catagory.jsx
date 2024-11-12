import React from "react";

const Catagory = ({ name, num }) => {
  return (
    <div className="w-32 redd border rounded-md cursor-pointer h-full flex flex-col items-center justify-center">
      <div className="size-10 rounded-full border flex items-center justify-center">
        {num + 1}
      </div>
      <h1>Saree name</h1>
    </div>
  );
};

export default Catagory;
