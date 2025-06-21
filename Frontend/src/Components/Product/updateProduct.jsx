import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom"

const updateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetail();
  },[]);

  const getProductDetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/update/${params.id}`);
    result = await result.json();
    
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }


  const handleUpdate = async () => {
   console.warn(name,price,category,company)
   let result = await fetch(`http://localhost:5000/product/${params.id}`,{
    method : "PUT",
    body : JSON.stringify({name,price,category,company}),
    headers : {
        "Content-Type" : "application/json"
    }
   });
   result = await result.json();
   console.warn(result)
   navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-2xl space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Update Product
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
           Update Product
        </button>
      </div>
    </div>
  );
};

export default updateProduct;
