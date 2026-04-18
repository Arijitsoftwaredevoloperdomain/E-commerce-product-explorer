import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import OrderConfirmation from "./OrderConfirmation";
import { Link } from "react-router-dom";

import { Package, MapPin } from "lucide-react";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">
      <h2 className="text-4xl font-extrabold text-white mb-10">
        Checkout
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* FORM */}
        <div className="lg:col-span-2 p-6 bg-gray-900 rounded-xl">

          <h3 className="text-2xl text-orange-400 mb-4 flex items-center gap-2">
            <MapPin /> Shipping Details
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={deliveryDetails.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white rounded"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={deliveryDetails.address}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white rounded"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={deliveryDetails.city}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white rounded"
            />

            <input
              type="number"
              name="zip"
              placeholder="Pin Code"
              value={deliveryDetails.zip}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white rounded"
            />

            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white rounded font-bold"
            >
              Pay ₹{cartTotal.toFixed(2)}
            </button>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="p-6 bg-gray-900 rounded-xl">

          <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
            <Package /> Order Summary
          </h3>

          <div className="space-y-3">

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-300">

                {/* 🔥 FIXED HERE */}
                <span>{item.title}</span>

                <span>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <div className="flex justify-between text-white font-bold text-lg">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/"
            className="block mt-5 text-center text-orange-400"
          >
            ← Back to Shop
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Checkout;