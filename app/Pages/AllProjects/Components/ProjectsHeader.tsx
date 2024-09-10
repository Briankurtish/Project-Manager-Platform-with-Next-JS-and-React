import { Add, Menu, Search } from "@mui/icons-material";
import React from "react";

function ProjectsHeader() {
  return (
    <div className="flex justify-between">
      {/* Search Bar component */}
      <SearchBar />
      {/* Add Button */}
      <AddProjectButton />
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
        <div className="border-b-2 w-[67%] border-slate-200">
          <input
            placeholder="Search a project..."
            className="p-2 bg-transparent text-[14px] outline-none"
          />
        </div>
      </div>
    );
  }

  //   Add Button
  function AddProjectButton() {
    return (
      <div className="flex gap-3 items-center">
        <button className="bg-blue-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center p-2">
          <Add sx={{ fontSize: "22px" }} className="mt-[2px]" />
          <span>New Project</span>
        </button>
        <Menu className="text-slate-400 h-9 cursor-pointer hidden max-sm:block" />
      </div>
    );
  }
}

export default ProjectsHeader;
