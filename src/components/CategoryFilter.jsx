import React from "react";
import { Tag } from "lucide-react";

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-5">
      <Tag className="text-orange-500" />

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? "bg-orange-600 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;