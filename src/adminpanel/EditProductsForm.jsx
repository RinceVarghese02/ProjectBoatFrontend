import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

const EditProductsForm = () => {
  const navigate=useNavigate()
  const location=useLocation()

  function openViewAllData(){
    navigate('/ViewAllData')
  }

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/product/editproduct',formData)
    .then((res)=>{
    //   console.log(res.data.success)
      if(res.data.success){
        navigate('/ViewAllData')
      }
      
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  
  // console.log(location.state)

  useEffect(()=>{
    axios.post('http://localhost:3000/product/getoneproduct',{id:location.state})
    .then((res)=>{
    //   console.log(res.data.data)
      setFormData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Enter Product Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter product tags"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Playback</label>
          <input
            type="text"
            name="playback"
            value={formData.playback}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter playback info"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter product rating"
            step="0.1"
            min="0"
            max="5"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Sale Price</label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter sale price"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Offer Price</label>
          <input
            type="text"
            name="offerPrice"
            value={formData.offerPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter offer price"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Discount (%)</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter discount percentage"
            step="1"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Color Available Count</label>
          <input
            type="text"
            name="colorAvailableCount"
            value={formData.colorAvailableCount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter number of available colors"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-2"
          onClick={openViewAllData}
        >
          View Data
        </button>
    </div>
  );
};

export default EditProductsForm;
