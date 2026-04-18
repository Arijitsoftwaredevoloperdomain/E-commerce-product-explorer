import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="text-white text-lg font-bold">
          {product.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {product.description}
        </p>

        <p className="text-orange-400 font-bold mt-2">
          ₹{product?.price?.toFixed(2)}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-orange-600 text-white py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;