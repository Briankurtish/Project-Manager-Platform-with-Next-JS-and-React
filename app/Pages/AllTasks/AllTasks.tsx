import React from "react";
import TasksHeader from "./Components/TasksHeader";
import TasksSubHeader from "./Components/TasksSubHeader";

const AllTasksContainer = () => {
  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader />
    </div>
  );
};

export default AllTasksContainer;
