import { Link, Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/nav";

const ProductLayout = () => {
  return (
    <div>
      <Nav />
      {/* Product Page Content */}
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div className="col-span-1">
          <ul>
            <li>
              <Link to="/T shirt">T shirt</Link>
            </li>
            <li>
              <Link to="/pants">Pants</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
