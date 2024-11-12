import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center gap-5 px-5 ">
        <div
          id="checkout-form"
          className="w-full flex items-center justify-center h-full redd"
        >
          <form
            action=""
            className="w-[30rem] p-5 flex items-center justify-center flex-col gap-5 h-[50rem] redd border"
          >
            <div className="w-full">
              <Label className="pl-2">Name</Label>
              <Input placeholder="your name here.."></Input>
            </div>
            <div className="w-full">
              <Label className="pl-2">Address</Label>
              <Input placeholder="your name here.."></Input>
            </div>
            <div className="w-full">
              <Label className="pl-2">Phone number</Label>
              <Input placeholder="your name here.."></Input>
            </div>
            <div className="w-full">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
        <div
          id="checkout-order"
          className="w-full h-full flex items-center justify-center redd"
        >
          <div
            id="order"
            className="w-96 p-2 h-[40rem] redd rounded-md border flex flex-col items-center justify-center gap-1 "
          >
            <div
              id="image"
              className="w-full h-full rounded-md bg-zinc-200 border"
            ></div>
            <div className="w-full">
              <h1 className="w-full">saree name </h1>
              <h1 className="w-full">saree price : 2999/- </h1>
              <Button>Order now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
