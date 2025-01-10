import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Cards = (props) => {
  const navigate=useNavigate()
  function productdetail(){
    navigate('/product')
  }
  return (
    <>
    
    
        <div onClick={()=>{productdetail()}} className="cursor-pointer relative xss:w-36 xs:w-52  bg-white rounded-2xl shadow-md border border-gray-200 mb-5">
      {/* Engraving Banner */}
      <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-tl-xl rounded-br-xl z-5">
        {props.data.tags}
      </div>

      {/* Product Image */}
      <img
        src={props.data.image} // Replace this with the actual image path
        className="w-full xss:h-[150px] xs:h-[180px] rounded-t-xl"
      />

      {/* Playback Time */}
      <div className="flex items-center justify-between bg-[#FCC50B] px-3 py-2 rounded-b-xl">
        <span className="text-xs font-bold text-gray-900">
          {props.data.playback}
        </span>
        <span className="flex items-center space-x-1 text-xs font-semibold bg-white rounded px-1">
          <span>⭐</span>
          <span>{props.data.rating}</span>
        </span>
      </div>

      {/* Product Title */}
      <div className="mt-3 text-sm font-bold text-gray-900 px-2">
      {props.data.name}
      </div>

      {/* Price and Offers */}
      <div className="flex items-center mt-2 space-x-2 px-2 ">
        <span className="xss:text-lg xs:text-xl font-bold text-gray-900  flex items-center"><FaIndianRupeeSign className='xss:text-[13px] xs:text-[15px]'/>{props.data.salePrice}</span>
        <span className="text-sm line-through text-gray-500">{props.data.offerPrice}</span>
        <span className="text-sm text-green-600 font-semibold">{props.data.discount}</span>
      </div>

      {/* Offers */}
      <div className="flex items-center xss:mt-0 xs:mt-2 space-x-2 text-sm text-gray-600 p-2 ">
        <div className="flex items-center">
          <div className="p-2 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-xs font-medium">Colors :-</span>
          </div>
        </div>
        <span>{props.data.colorAvailableCount}</span>
      </div>
    </div>
    </>
  )
}

export default Cards