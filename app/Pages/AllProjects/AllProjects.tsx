import React from "react";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSubHeader from "./Components/ProjectsSubHeader";
import AllProjectsSection from "./Components/AllProjectsSection";

const AllProjects = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
    </div>
  );

  function AllProjectsArea() {
    return (
      <div className="w-[78%] p-10 flex flex-col gap-3 border">
        {/* Search bar and Add project Button */}
        <ProjectsHeader />
        {/* My Projects Title and the add button */}
        <ProjectsSubHeader />
        <AllProjectsSection />
      </div>
    );
  }
};

export default AllProjects;
