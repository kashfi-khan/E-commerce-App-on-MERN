import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method : "Delete"
    });
    result = await result.json();
     
    if(result){
         getProducts();              
        alert("Record is Deleted");
        
    }

  
  }

  console.warn("products", products);

  return (
     <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Product List</h2>

      {products.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item, index) => (
            <ProductCard key={item._id || index} item={item} 
            index={index} onDelete={(itme)=>deleteProduct(item._id)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">Loading products…</p>
      )}
    </div>
  );
};

export default ProductList;
