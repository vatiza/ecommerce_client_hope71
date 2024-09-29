import { Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/nav";


const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <div className="px-3 lg:px-10"><Outlet /></div>
    </div>
  );
};

export default MainLayouts;
