import React from "react";
import { IoIosSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div>
      <form className="relative items-center">
        <input
          type="text"
          placeholder="Search Templates"
          className="md:pl-6 pl-3 md:pr-5 py-2 text-sm rounded-sm border border-solid border-gray-300 placeholder-gray-400 w-80 h-8 outline-none"
        />
        <button className="absolute top-2 left-72 md:left-80 text-3xl text-gray-400 border-none bg-white outline-none">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};