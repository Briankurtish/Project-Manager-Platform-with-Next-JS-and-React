import SideBar from "./Components/SideBar";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      <SideBar />

      <AllTasksContainer />
    </div>
  );
}
