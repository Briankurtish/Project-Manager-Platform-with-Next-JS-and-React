import {
  Cached,
  CheckBox,
  Circle,
  DeleteOutline,
  EditOutlined,
  List,
} from "@mui/icons-material";
import React from "react";

const TasksList = () => {
  return (
    <div className="ml-12 max-sm:ml-0 mt-11 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
};

export default TasksList;

function Tabs() {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-blue-400 font-semibold">
        <span>On Going Tasks</span>
        <span className="bg-blue-600 text-white px-2 rounded-md max-[420px]:hidden">
          7
        </span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 text-white px-2 rounded-md max-[420px]:hidden">
          8
        </span>
      </div>
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex gap-2 items-center">
      <CheckBox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4">
        <div className="flex gap-3 items-center">
          {/* Wallet Icon */}
          <div>
            <div className="bg-blue-200 rounded-lg p-2 flex items-center justify-center">
              <List className="text-blue-600" />
            </div>
          </div>

          {/* Wallet Name */}
          <div className="flex flex-col">
            <span className="font-bold hover:text-blue-600 cursor-pointer">
              Create the UI Design of the task
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">
                Project
              </span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="flex gap-36 font-bold item-center">
          <div className="flex gap-2 items-center max-[770px]:hidden">
            <Cached className="text-[24px] text-slate-400" />
            <span className="text-[14px] text-slate-400">In Progress</span>
          </div>

          {/* Priority */}
          <div className="flex gap-2 items-center max-[940px]:hidden ">
            <Circle className="text-[10px] text-green-600" />
            <span className="text-[14px] text-slate-400">Low</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 items-center">
            {/* Edit Button */}
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-blue-200 hover:bg-blue-300 transition-all">
              <EditOutlined
                sx={{ fontSize: "17px" }}
                className="text-blue-600"
              />
            </div>

            {/* Delete Button */}
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300 transition-all">
              <DeleteOutline
                sx={{ fontSize: "17px" }}
                className="text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
