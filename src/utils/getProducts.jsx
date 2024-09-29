import { useEffect, useState } from "react";
const GetProducts = () => {
  const [prodcuts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json(); //+
      setProducts(data); //+
      setLoading(false); //+
      console.log(data); // log the received data to the console for testing purposes  // this line should be removed in a real application//+
    };

    fetchProducts();
  }, []);

  return [prodcuts, loading];
};

export default GetProducts;
