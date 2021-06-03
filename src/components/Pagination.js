import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";

export const Pagination = () => {
  const [pages, setPages] = useState(1);

  return (
    <div className="flex text-neautraltext justify-between items-center font-circular mb-3 px-4">
      <button
        className={`font-medium text-base border-none ${
          pages === 1 ? "cursor-not-allowed" : ""
        } bg-white outline-none focus:outline-none`}
      >
        Previous
      </button>
      <div className="flex items-center space-x-2">
        <button className="font-medium text-base px-3 py-1 bg-white rounded border">
          {pages}
        </button>
        <h3 className="font-normal text-base">of 200</h3>
      </div>
      <button
        className={`font-medium text-base flex items-center border-none ${
          pages === 1 ? "cursor-pointer" : ""
        } bg-white outline-none focus:outline-none`}
      >
        Next
        <GrFormNext className="ml-2" />
      </button>
    </div>
  );
};
