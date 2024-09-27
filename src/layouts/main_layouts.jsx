import { Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/nav";


const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
