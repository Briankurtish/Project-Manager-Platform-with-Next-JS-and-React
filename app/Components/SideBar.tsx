import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className="w-[90px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );

  //   Profile Image
  function Profile() {
    return <div className="w-7 h-7 bg-blue-600 rounded-md"></div>;
  }

  //   Menu
  function Menu() {
    return (
      <div className="flex flex-col gap-6 items-center">
        <BorderAll
          sx={{ fontSize: "25px" }}
          className="text-blue-600 cursor-pointer"
        />

        <Splitscreen
          sx={{ fontSize: "23px" }}
          className="text-slate-300 cursor-pointer"
        />

        <Logout
          sx={{ fontSize: "23px" }}
          className="text-slate-300 cursor-pointer"
        />
      </div>
    );
  }

  // Logo
  function Logo() {
    return (
      <div className="flex items-center justify-center">
        <TaskAlt
          className="text-blue-600 font-bold"
          sx={{ fontsize: "41px" }}
        />
      </div>
    );
  }
};

export default SideBar;
