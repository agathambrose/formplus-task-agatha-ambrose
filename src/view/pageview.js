import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { useEffect } from "react";
import { Sortby } from "../components/Sortby";
import { Templates } from "../components/Templates";

export const PageView = () => {
  const { templateList } = useSelector((state) => state.templates);

  const [list, setList] = useState(templateList || []);
  // let list = templateList || [];
  useEffect(() => {
    setList(templateList);
  }, [templateList]);
  const handleSort = (value) => {
    if (value === "All") {
      setList(templateList);
    } else {
      let categoryList = templateList.filter(
        (item) => item && item.category && !item.category.includes(value)
      );
      setList(categoryList);
    }
    console.log("value is ", value);
  };
  return (
    <div className="w-11/12 mt-8">
      <div>
        <div className="flex flex-col items-center justify-between md:flex-col lg:flex-row">
          <Search />
          <br className="block md:block lg:hidden" />
          <Sortby handleSort={handleSort} list={list} />
        </div>

        <div>
          <Banner />
        </div>
        <div>
          <Templates list={list} />
        </div>
      </div>
    </div>
  );
};
