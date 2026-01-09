import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsDataContext } from "../context/ProductsContext";

const ProductDetails = () => {

  const productData = useContext(ProductsDataContext)

  const {id} = useParams()

  let selectedProduct = productData.filter((elem)=> elem.id == id)

  selectedProduct = selectedProduct[0]
  

  const navigate = useNavigate()
  return (
    <div className="px-8 py-6 absolute top-1/2 left-1/2 -translate-1/2">
      <button onClick={()=>{
        navigate('/products')
      }}
      className="px-6 rounded-2xl font-bold py-2 bg-gray-800 mb-8 cursor-pointer"
      >Back</button>


      <div className="bg-gray-700 rounded-2xl w-80 flex flex-col md:flex-row gap-8 px-4 py-6 items-center md:w-200">
        <div className="h-60 w-50 p-4 md:h-80 md:w-70 shadow-2xl shadow-black rounded-2xl border border-gray-600">
          <img className="h-full w-full object-cover object-top" src={selectedProduct.image} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-gray-500">{selectedProduct.category.toUpperCase()}</h5>
          <h1 className="text-2xl">{selectedProduct.title}</h1>
          <p className="md:w-80">{selectedProduct.description ? selectedProduct.description[0].toUpperCase() + selectedProduct.description.slice(1).toLowerCase() : ""}</p>
        </div>
        <div className="flex justify-between items-center w-full h-auto md:w-auto md:flex-col md:justify-end px-6 md:gap-2 md:absolute md:right-10 md:bottom-25">
          <h3 className="text-xl">$ {selectedProduct.price}</h3>
          <button className="px-6 py-1 bg-green-600 rounded-xl">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
