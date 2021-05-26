import React from "react";

export const Sortby = () => {
  return (
    <div>
      <form className="flex items-center text-sm md:text-base">
        <p className="md:mr-8 text-gray-400 hidden md:block text-sm font-normal">
          Sort By:{" "}
        </p>
        <div className="mr-3 md:mr-6">
          <fieldset
            className="text-gray-400 px-2 md:px-4 py-1 rounded-sm"
            style={{ border: "1px solid lightgray" }}
          >
            <legend className="text-xs">Category</legend>
            <select className="text-black font-Inter bg-white border-none py-1 px-0 md:px-4 outline-none">
              <option className="text-base" value="All">
                All
              </option>
              <option value="Education">Education</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Health">Health</option>
            </select>
          </fieldset>
        </div>

        <div className="mr-3 md:mr-6">
          <fieldset
            className="text-gray-400 px-2 md:px-4 py-1 rounded-sm"
            style={{ border: "1px solid lightgray" }}
          >
            <legend className="text-xs">Order</legend>
            <select className="text-black font-Inter bg-white border-none py-1 px-0 md:px-4 outline-none">
              <option value="Default">Default</option>
            </select>
          </fieldset>
        </div>

        <div>
          <fieldset
            className="text-gray-400 px-2 md:px-4 py-1 rounded-sm"
            style={{ border: "1px solid lightgray" }}
          >
            <legend className="text-xs">Date</legend>
            <select className="text-black font-Inter bg-white border-none py-1 px-0 md:px-4 outline-none">
              <option value="Default">Default</option>
            </select>
          </fieldset>
        </div>
      </form>
    </div>
  );
};
