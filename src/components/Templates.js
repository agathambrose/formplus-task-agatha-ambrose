import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemplates } from "../redux/features/slice/templateSlice";
import { Pagination } from "./Pagination";
// import { Dummydata } from "../dummydata";

export const Templates = () => {
  const dispatch = useDispatch();

  const { templateList, loading, errors } = useSelector(
    (state) => state.templates
  );

  const errorMessage = errors ? (
    <h2 className="text-center font-bold h-screen text-2xl my-5 font-circular">
      Oops! An error occurred
    </h2>
  ) : (
    ""
  );

  useEffect(() => {
    const getAllTemplates = async () => {
      const res = await dispatch(getTemplates());
      console.log(res);
    };
    getAllTemplates();
  }, [dispatch]);

  const list = templateList.slice(0, 21);
  console.log(list);

  return (
    <div className="mt-8 w-full">
      <div className="flex justify-between items-center">
        <h3 className="font-medium font-circular text-lg text-gray-800">
          All templates
        </h3>
        <h4 className="font-medium font-circular text-sm text-gray-500">
          2000 templates
        </h4>
      </div>
      <div className="flex flex-wrap justify-center items-center my-4">
        {errorMessage}
        {templateList.length < 1 && loading ? (
          <h2 className="text-center font-bold h-screen text-2xl my-5 font-circular">
            Loading...
          </h2>
        ) : (
          list.map(({ category, key, description, name, link }) => {
            return (
              <div key={key} id={category} className="lg:w-1/3 sm:w-1/2 my-4">
                <div className="flex flex-col max-h-80 w-11/12 mx-3 pt-8 bg-white border-2 border-gray-300 shadow-list md:shadow-md rounded-md">
                  <h3 className="px-4 font-circular capitalize font-bold text-2xl mb-4">
                    {name}
                  </h3>
                  <p className="px-4 font-Inter text-neautraltext font-normal">
                    {description}
                  </p>
                  <br />
                  <a
                    href={link}
                    className="mt-5 bg-linkgray p-4 font-circular rounded-b-md no-underline text-linkgreen font-normal leading-6"
                  >
                    Use Template
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination />
    </div>
  );
};

// Todo
// 1. make sure the fonts are the same with that of the design on figma

//documentation
//I made use of shadow-lg for medium to large screens and 0px 4px 30px rgba(0, 0, 0, 0.08)stipulated on the figma file for small screens like phones
