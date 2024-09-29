import { Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/nav";

const ProductLayout = () => {
  return (
    <div>
      <Nav />
      {/* Product Page Content */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
            <li>Product 5</li>
          </ul>
        </div>
        <div>
          <Outlet />    
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
