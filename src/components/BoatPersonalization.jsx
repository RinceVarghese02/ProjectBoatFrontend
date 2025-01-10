import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "src/images/productimages/productimg5.jpg",
    engraving: true,
    rating: 4.9,
    reviews: 35,
    name: "boAt Nirvana Ion ANC",
    price: 2499,
    originalPrice: 9999,
    discount: "75% off",
    features: ["Noise Cancellation", "BEAST™ Mode"],
    playback: "120 Hours Playback",
    colorOptions: 3,
  },
  {
    id: 2,
    image: "src/images/productimages/productimg4.jpg",
    engraving: true,
    rating: 5.0,
    reviews: 77,
    name: "boAt Nirvana Ion",
    price: 1799,
    originalPrice: 7990,
    discount: "77% off",
    features: ["ENx™ Technology", "BEAST™ Mode"],
    playback: "120 Hours Playback",
    colorOptions: 0,
  },
  {
    id: 3,
    image: "src/images/productimages/productimg3.jpg",
    engraving: true,
    rating: 4.8,
    reviews: 1359,
    name: "boAt Airdopes 131",
    price: 899,
    originalPrice: 2990,
    discount: "70% off",
    features: ["13mm drivers", "IWP Technology"],
    playback: "30 Hours Playback",
    colorOptions: 5,
    bestSeller: true,
  },
  {
    id: 4,
    image: "src/images/productimages/productimg2.jpg",
    engraving: true,
    rating: 4.8,
    reviews: 1359,
    name: "boAt Airdopes 131",
    price: 899,
    originalPrice: 2990,
    discount: "70% off",
    features: ["13mm drivers", "IWP Technology"],
    playback: "30 Hours Playback",
    colorOptions: 5,
    bestSeller: true,
  },
  {
    id: 5,
    image: "src/images/productimages/productimg6.jpg",
    engraving: true,
    rating: 4.8,
    reviews: 1359,
    name: "boAt Airdopes 131",
    price: 899,
    originalPrice: 2990,
    discount: "70% off",
    features: ["13mm drivers", "IWP Technology"],
    playback: "30 Hours Playback",
    colorOptions: 5,
    bestSeller: true,
  },
  {
    id: 6,
    image: "src/images/productimages/productimg8.jpg",
    engraving: true,
    rating: 4.8,
    reviews: 1359,
    name: "boAt Airdopes 131",
    price: 899,
    originalPrice: 2990,
    discount: "70% off",
    features: ["13mm drivers", "IWP Technology"],
    playback: "30 Hours Playback",
    colorOptions: 5,
    bestSeller: true,
  },
];

const boatPersonalization = () => {

    const navigate=useNavigate()
    function opencards(){
        navigate('/product')
    }

  return (
    <div className="py-6 px-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Special Range — Personalised Products</h2>
      <div className="flex justify-between items-center mb-4">
        <button className="bg-gray-200 px-4 py-2 rounded">Filter By</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Sort by : Featured</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] ml-[5%] cursor-pointer" onClick={opencards}>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            {product.engraving && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                Engraving Available
              </span>
            )}
            {product.bestSeller && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                Best Seller
              </span>
            )}
            <div className="">
              <img
                src={product.image} // Replace with actual image paths
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="mt-4 px-5">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 font-bold">{product.rating}</span>
                  <span className="text-gray-500 ml-1">| {product.reviews}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                  <span className="line-through text-gray-500 ml-2">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-green-500 ml-2">{product.discount}</span>
                </div>
                <ul className="text-sm text-gray-600 mb-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  {product.playback}
                </p>
                <button className="bg-black text-white w-full py-2 rounded-lg">
                  Add To Cart
                </button>
                {product.colorOptions > 0 && (
                  <span className="text-sm text-gray-500 block mt-2">
                    +{product.colorOptions} color options
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default boatPersonalization;
