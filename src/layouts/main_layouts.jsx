import { Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/nav";
import BottomNavigation from "../components/shared/bottomNavigation/bottomNav";
import { useMediaQuery } from "react-responsive";
const MainLayouts = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <div>
      <Nav />
      <div className="px-3 lg:px-10">
        <Outlet />
      </div>
     <div className="">
        <Mobile>
          <BottomNavigation />
        </Mobile>
     </div>
    </div>
  );
};

export default MainLayouts;
