import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import {useNavigate} from "react-router-dom"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

   const getProducts = async () => {
    try {
      setLoading(true);                         // start spinner
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);                        // stop spinner
    }
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method : "Delete"
    });
    result = await result.json();
     
    if(result){
         getProducts();        
    }
    
  }

  console.warn("products", products);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Product List
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 italic">Loading products…</p>
      ) : products.length ? (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item, index) => (
            <ProductCard
              key={item._id || index}
              item={item}
              index={index}
              onDelete={() => deleteProduct(item._id)}
              onEdit={()=>navigate(`/update/${item._id}`)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">
          No products available.
        </p>
      )}
    </div>
  );
};

export default ProductList;
