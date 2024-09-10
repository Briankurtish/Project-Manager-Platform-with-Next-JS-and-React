import React from "react";

const AllProjectsSection = () => {
  return (
    <ul className="h-[78%] overflow-auto flex gap-4 flex-wrap mt-6">
      <SingleProjectCard />
    </ul>
  );
};

export default AllProjectsSection;
