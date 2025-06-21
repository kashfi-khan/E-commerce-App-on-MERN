import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [key,      setKey]      = useState("");   // <-- search keyword
  const navigate = useNavigate();

  /* ------------ initial full list ------------ */
  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res  = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  /* ------------ search handler (path-param) ------------ */
  const runSearch = async () => {
    if (!key.trim()) return fetchAll();          // empty => full list
    setLoading(true);
    try {
      const res  = await fetch(
        `http://localhost:5000/search/${encodeURIComponent(key.trim())}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  /* ------------ delete ------------ */
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/product/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  /* ------------ UI ------------ */
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Product List
      </h2>

      {/* 🔍 Search bar (no <form>) */}
      <div className="flex items-center max-w-xl mx-auto mb-8 rounded-2xl shadow-lg p-3 bg-white">
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runSearch()} // Enter support
          placeholder="Search products…"
          className="flex-1 px-4 py-2 rounded-l-xl focus:outline-none text-gray-800"
        />
        <button
          onClick={runSearch}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-r-xl transition-all"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 italic">Loading…</p>
      ) : products.length ? (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item, i) => (
            <ProductCard
              key={item._id}
              item={item}
              index={i}
              onDelete={() => deleteProduct(item._id)}
              onEdit={() => navigate(`/update/${item._id}`)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
