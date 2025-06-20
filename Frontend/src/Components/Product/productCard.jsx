import React from "react";

const ProductCard = ({ item, index, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 w-64 flex flex-col gap-4">
    {/* Badge + content */}
    <div className="flex gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold">
        {index + 1}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Price:</span> Rs. {item.price}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {item.category}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Company:</span> {item.company}
        </p>
      </div>
    </div>

    {/* Action buttons */}
    <div className="flex justify-end gap-3 pt-2">
      <button
        onClick={() => onEdit?.(item)}
        className="px-3 py-1.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
      >
        ✏️ Edit
      </button>
      <button
        onClick={() => onDelete?.(item)}
        className="px-3 py-1.5 rounded-md text-xs font-medium bg-red-100 text-red-600 hover:bg-red-200 transition"
      >
        🗑️ Delete
      </button>
    </div>
  </div>
);

export default ProductCard;
