import React from "react";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { Sortby } from "../components/Sortby";
import { Templates } from "../components/Templates";

export const PageView = () => {
  return (
    <div className="mt-8 w-11/12 font-Inter">
      <div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
          <Search />
          <br className="block md:block lg:hidden" />
          <Sortby />
        </div>

        <div>
          <Banner />
        </div>
        <div>
          <Templates />
        </div>
      </div>
    </div>
  );
};
