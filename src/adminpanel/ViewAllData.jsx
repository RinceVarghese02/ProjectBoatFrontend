import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewAllData = () => {
    const navigate=useNavigate()
    const [data,setdata]=useState([]);
    const [data2,setdata2]=useState([]);
    function openAddData(){
        navigate('/ProductForm')
    }
    function openAddCategory(){
        navigate('/CategoriesForm')
    }


    useEffect(()=>{
        axios.get("http://localhost:3000/product/allproductdata")
        .then((data)=>{
            // setdata(data.response)
            setdata(data.data.allproduct)
            console.log(data.data.allproduct)
        })
        .catch((err)=>{
            console.log(err )
        })
    },[])
    console.log(data)

    useEffect(()=>{
      axios.get("http://localhost:3000/product/allcategoriesdata")
      .then((data2)=>{
          // setdata(data.response)
          setdata2(data2.data.allcategories)
          console.log(data2.data.allcategories)
      })
      .catch((err)=>{
          console.log(err )
      })
  },[])
  console.log(data2)


  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View All Product Data</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={openAddData}
      >
        Add Data
      </button>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Sale Price</th>
            <th className="border border-gray-300 px-4 py-2">Offer Price</th>
            <th className="border border-gray-300 px-4 py-2">Discount</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
            <th className="border border-gray-300 px-4 py-2">Updated At</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">₹{item.salePrice}</td>
              <td className="border border-gray-300 px-4 py-2">₹{item.offerPrice}</td>
              <td className="border border-gray-300 px-4 py-2">{item.discount}</td>
              <td className="border border-gray-300 px-4 py-2">{item.createdAt}</td>
              <td className="border border-gray-300 px-4 py-2">{item.updatedAt}</td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>

    {/* // Categories Data */}
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View All Categories Data</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={openAddCategory}
      >
        Add Data
      </button>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
            <th className="border border-gray-300 px-4 py-2">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">₹{item.image}</td>
              <td className="border border-gray-300 px-4 py-2">{item.createdAt}</td>
              <td className="border border-gray-300 px-4 py-2">{item.updatedAt}</td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ViewAllData;
