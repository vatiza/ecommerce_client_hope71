import ProductsCard from "../../components/shared/ui/card/products_card";
import GetProducts from "../../utils/getProducts";

const AllProducts = () => {
  const [products, loading] = GetProducts();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold lg:text-3xl">All Products</h1>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductsCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
