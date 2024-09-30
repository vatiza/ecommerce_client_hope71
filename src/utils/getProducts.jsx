import { useEffect, useState } from "react";
const GetProducts = () => {
  const [prodcuts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json(); //+
      setProducts(data); 
      setLoading(false); 
    };

    fetchProducts();
  }, []);

  return [prodcuts, loading];
};

export default GetProducts;
