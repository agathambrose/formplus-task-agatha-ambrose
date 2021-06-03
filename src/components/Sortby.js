import React from "react";
import { useSelector } from "react-redux";
// import { matchSorter } from "match-sorter";

export const Sortby = () => {
  const { templateList } = useSelector((state) => state.templates);
  const dropDwn = templateList.slice(0, 3);
  return (
    <div>
      <form className="flex items-center text-sm md:text-base font-circular">
        <p className="md:mr-8 text-gray-400 hidden md:block text-sm font-normal">
          Sort By:{" "}
        </p>
        <div className="mr-3 md:mr-6">
          <fieldset
            className="text-gray-400 px-2 md:px-4 py-1 rounded-sm"
            style={{ border: "1.5px solid lightgray" }}
          >
            <legend className="text-xs">Category</legend>
            <select className="text-black font-Inter bg-white border-none py-1 px-0 md:px-4 outline-none">
              {templateList.length < 1 ? (
                <h2 className="text-center font-bold text-2xl my-5 font-circular">
                  Loading...
                </h2>
              ) : (
                dropDwn.map(({ category, key }) => {
                  return (
                    <option className="text-base" value="All" key={key}>
                      {category[0]}
                    </option>
                  );
                })
              )}
            </select>
          </fieldset>
        </div>

        <div className="mr-3 md:mr-6">
          <fieldset
            className="text-gray-400 px-2 md:px-4 py-1 rounded-sm"
            style={{ border: "1.5px solid lightgray" }}
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
            style={{ border: "1.5px solid lightgray" }}
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
