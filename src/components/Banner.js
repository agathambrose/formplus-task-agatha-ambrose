import React from "react";
import { BsInfoCircle } from "react-icons/bs";

export const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center bg-red-100 p-3 mx-auto">
        <BsInfoCircle className="text-yellow-500 font-bold text-7xl md:text-2xl mr-8" />
        <h4 className="text-sm md:text-sm font-medium tracking-wide text-justify">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </h4>
      </div>
    </div>
  );
};
