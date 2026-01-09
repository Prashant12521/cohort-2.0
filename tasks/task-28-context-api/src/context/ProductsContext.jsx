import React, { createContext, useEffect, useState } from "react";
import { getAllProductsData } from "../api/productsAPI";


export const ProductsDataContext = createContext();

const ProductsContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    setProductData(await getAllProductsData());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductsDataContext.Provider value={productData}>
      {children}
    </ProductsDataContext.Provider>
  );
};

export default ProductsContext;
