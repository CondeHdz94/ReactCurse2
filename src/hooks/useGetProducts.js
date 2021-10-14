import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const resolve = await axios(API);
    setProducts(resolve.data);
  }, []);
  return products;
};

export default useGetProducts;
