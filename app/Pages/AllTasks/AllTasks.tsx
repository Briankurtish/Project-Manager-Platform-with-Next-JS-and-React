import React from "react";
import TasksHeader from "./Components/TasksHeader";
import TasksSubHeader from "./Components/TasksSubHeader";
import TasksList from "./Components/TasksList";

const AllTasksContainer = () => {
  return (
    <div className="bg-slate-50 w-full p-10 max-sm:p-8 max-sm:py-9">
      <TasksHeader />
      <TasksSubHeader />
      <TasksList />
    </div>
  );
};

export default AllTasksContainer;
