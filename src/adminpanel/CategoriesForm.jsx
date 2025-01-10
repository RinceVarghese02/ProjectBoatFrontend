import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CategoriesForm = () => {
  const navigate=useNavigate()

  function openViewAllData(){
    navigate('/ViewAllData')
  }

  const [formData, setFormData] = useState({
      image: "",
      name: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("CategoriesDetails Form Submitted:", formData);
    axios.post('http://localhost:3000/product/categoriesdetails',formData)
    .then((res)=>{
        console.log('form sent to backend',res)
        if(res.data.success){
          navigate('/ViewAllData')
        }
        
    })
    .catch((err)=>{
        console.log('form not sent',err)
    })
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Enter Categories Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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

export default CategoriesForm;
