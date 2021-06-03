import { useState } from "react";
// import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { matchSorter } from "match-sorter";

export const Search = () => {
  // const { templateList, loading, errors } = useSelector(
  //   (state) => state.templates
  // );
  // const list = templateList.slice(0, 21);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  const list = [
    { category: ["Health"] },
    { category: ["E-commerce"] },
    { category: ["Education"] },
  ];

  return (
    <div>
      <form className="relative items-center">
        <input
          style={{ border: "1.5px solid lightgray" }}
          type="text"
          placeholder="Search Templates"
          className="md:pl-6 pl-3 md:pr-5 py-2 text-sm rounded-sm placeholder-gray-400 w-80 h-8 outline-none font-circular"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setResult(
              matchSorter(list, e.target.value, {
                keys: ["category"],
              })
            );
          }}
        />
        <button
          className="absolute top-2 left-72 md:left-80 text-3xl text-gray-400 border-none bg-white outline-none"
          onSubmit={matchSorter}
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};
