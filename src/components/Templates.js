import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemplates } from "../redux/features/slice/templateSlice";
import { Dummydata } from "../dummydata";

export const Templates = () => {
  const dispatch = useDispatch();
  const { templateList, loading, errors } = useSelector(
    (state) => state.templates
  );
  useEffect(() => {
    const getAllTemplates = dispatch(getTemplates());
    console.log(getAllTemplates);
  }, [dispatch]);

  return (
    <div className="mt-8 w-full">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg text-gray-800">All templates</h3>
        <h4 className="font-medium text-sm text-gray-500">2000 templates</h4>
      </div>
      <div className="flex flex-wrap justify-center items-center my-4">
        {Dummydata.map((val, key) => {
          return (
            <div key={key} className="lg:w-1/3 sm:w-1/2 my-4">
              <div className="flex flex-col w-11/12 mx-3 pt-8 bg-white border-2 border-gray-300 shadow-list md:shadow-md rounded-md">
                <h3 className="px-4 font-circular font-bold text-2xl mb-4">
                  {val.title}
                </h3>
                <p className="px-4 font-Inter text-neautraltext font-normal">
                  {val.summary}
                </p>
                <br />
                <a
                  href={val.link}
                  className="mt-5 bg-linkgray p-4 rounded-b-md no-underline text-linkgreen font-normal leading-6"
                >
                  {val.linkphrase}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Todo
// 1. make sure the fonts are the same with that of the design on figma

//documentation
//I made use of shadow-lg for medium to large screens and 0px 4px 30px rgba(0, 0, 0, 0.08)stipulated on the figma file for small screens like phones
