import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="relative mb-5 text-5xl underline">
        Product Page
      </h1>
      <div className="flex gap-4">
        <Link to={'/product/men'}>Men's Collection</Link>
        <Link to={'/product/women'}>Women's Collection</Link>
      </div>
    </div>
  );
};

export default Product;
