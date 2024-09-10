import { Add, Search } from "@mui/icons-material";
import React from "react";

function TasksHeader() {
  return (
    <div className="flex justify-between">
      {/* Search Bar component */}
      <SearchBar />
      {/* Add Button */}
      <AddPTaskButton />
    </div>
  );

  function SearchBar() {
    return (
      <div className="flex items-center">
        {/* Search Icon */}
        <div className="border-b-2 border-blue-600 h-[39px] w-11 justify-center flex items-center">
          <Search
            className="text-slate-400 outline-none"
            sx={{ fontSize: "26px" }}
          />
        </div>

        {/* Search Input */}
        <div className="border-b-2 border-slate-200">
          <input
            placeholder="Search a Task..."
            className="p-2 bg-transparent text-[14px] outline-none"
          />
        </div>
      </div>
    );
  }

  //   Add Button
  function AddPTaskButton() {
    return (
      <button className="bg-blue-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center">
        <Add sx={{ fontSize: "22px" }} className="mt-[2px]" />
        <span>New Task</span>
      </button>
    );
  }
}

export default TasksHeader;
