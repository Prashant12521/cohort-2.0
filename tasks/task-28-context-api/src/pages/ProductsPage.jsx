import React, { useContext } from "react";
import { ProductsDataContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const allProducts = useContext(ProductsDataContext);

  return (
    <div className="px-8 py-6">
      <h1 className="mb-12 font-mono text-3xl font-semibold">
        Explore Products
      </h1>

      <div className="flex flex-col items-center gap-8">
        {allProducts.map((elem) => {
          return (
            <Link key={elem.id} to={`/products/${elem.id}`} className="w-full max-w-4xl">
              <div className="flex min-h-65 flex-col rounded-2xl bg-gray-700 px-4 py-4 md:flex-row md:gap-8 hover:scale-[1.05] transition-all ease-in-out">
                <div className="flex h-60 w-full md:w-60 mb-4 items-center justify-center rounded-3xl bg-gray-600 p-3 shadow-2xl shadow-black">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="max-h-full max-w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 md:pt-8">
                  <h2 className="line-clamp-2 text-2xl font-semibold">
                    {elem.title}
                  </h2>

                  <div className="flex items-center gap-2">
                    <span className="rounded bg-green-600 px-2 text-sm">
                      {elem.rating.rate}★
                    </span>
                    <span className="text-sm text-gray-300">
                      {elem.rating.count} Reviews
                    </span>
                  </div>

                  <h3 className="text-sm uppercase tracking-wide text-gray-400">
                    {elem.category}
                  </h3>

                  <h5 className="mt-auto text-xl md:mb-5 font-bold">$ {elem.price}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
