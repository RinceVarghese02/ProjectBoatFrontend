import React, { useRef } from 'react'
import Footer from './Footer'
import primg1 from '../images/productdetailimages/productdetailimg1.png'
import primg2 from '../images/productdetailimages/productdetailimg2.jpg'
import primg3 from '../images/productdetailimages/productdetailimg3.jpg'
import primg4 from '../images/productdetailimages/productdetailimg4.jpg'
import primg5 from '../images/productdetailimages/productdetailimg5.jpg'
import primg6 from '../images/productdetailimages/productdetailimg6.jpg'
import primg7 from '../images/productdetailimages/productdetailimg7.jpg'
import primg8 from '../images/productdetailimages/productdetailimg8.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import flipkart from '../images/flipkart.png'
import img7 from '../images/tandcimages/tandcimg1.svg'
import img8 from '../images/tandcimages/tandcimg2.svg'
import img9 from '../images/tandcimages/tandcimg3.svg'
import img10 from '../images/tandcimages/tandcimg4.svg'
import boatrewardslogo from '../images/boAt_Rewards_logo.webp'


const CardsDetails = () => {

    const tandc = [
          {
              icon: img7,
              text1: "1 year",
              text2: "Warranty",
          },
          {
              icon: img8,
              text1: "7-day",
              text2: "Replacement",
          },
          {
              icon: img9,
              text1: "Free Express",
              text2: "Delivery",
          },
          {
              icon: img10,
              text1: "GST",
              text2: "Billing",
          }
      ]

  const scrollref = useRef(null)

  function right() {
    if (scrollref.current) {
      const scrollamount = scrollref.current.offsetWidth;
      scrollref.current.scrollLeft += scrollamount;
    }
  }
  function left() {
    if (scrollref.current) {
      const scrollamount = scrollref.current.offsetWidth;
      scrollref.current.scrollLeft -= scrollamount;
    }
  }

  return (
    <>
      <div className=''>
        <div className='sm:block lg:flex px-7'>

          <div className='px-5 lg:w-[40%]  relative'>
            <div className='sticky top-[127px]' >

            <IoIosArrowForward className='absolute select-none right-6 text-white bg-[#1A2024]  h-10 w-10 rounded-full p-3 xss:hidden xs:block z-[4] xs:top-[40%] hover:border-2 hover:border-gray-600' onClick={right} />
            <IoIosArrowBack className='absolute select-none left-6 text-white bg-[#1A2024]  h-10 w-10 rounded-full p-3 xss:hidden xs:block z-[4] xs:top-[40%] hover:border-2 hover:border-gray-600' onClick={left} />
            <div className='flex overflow-auto scrollbar-hidden gap-2 w-full h-[450px] snap-x snap-mandatory' ref={scrollref}>
              <img src={primg1} alt="img1" className='min-w-full h-full snap-center' />
              <img src={primg2} alt="img2" className='min-w-full h-full snap-center' />
              <img src={primg3} alt="img3" className='min-w-full h-full snap-center' />
              <img src={primg4} alt="img4" className='min-w-full h-full snap-center' />
              <img src={primg5} alt="img5" className='min-w-full h-full snap-center' />
            </div>
            </div>
          </div>
          <div className='lg:w-[60%] py-5 px-10 space-y-2'>
            <h1 className='text-xs font-semibold text-gray-700'>⭐ 4.9 (172✅)</h1>
            <h1 className='text-[28px] font-bold text-gray-900'>boAt Airdopes 161</h1>
            <h1 className='text-gray-800 text-sm font-semibold'>Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface</h1>
            <h1 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>₹899<s className='text-sm text-gray-600'>₹2,490.00</s> <span className='text-sm text-green-500'>64% Off</span></h1>
            <div>
              <h1 className='font-bold text-gray-800'>Choose your colour :</h1>
              <h1 className='font-semibold text-gray-700'>Black, White, Green, Blue, Gray</h1>
            </div>

                <div class="flex items-center justify-between">
                  <span class="text-gray-800 font-bold my-2">Check Delivery</span>
                </div>
            <div class="px-5 py-4 space-y-4 rounded-lg max-w-sm bg-gray-100">
              {/* <!-- Check Delivery Section --> */}
              <div >
                <div class="mt-2 flex items-center text-sm justify-between">
                  <span class="text-gray-600 font-semibold">122008</span>
                  <button class="px-3 py-1 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">Change</button>
                </div>
                <div class="mt-1 text-sm text-green-600 font-medium">
                  Free delivery | By Wednesday, 1 Jan
                </div>
              </div>

            </div>
              {/* <!-- Users' Love Section --> */}
                <h3 class="text-gray-800 font-bold ">Users' Love</h3>
              <div class="p-4 bg-yellow-100 border border-yellow-300 rounded-md relative max-w-sm">
                <div class="mt-2 text-sm text-gray-700 space-y-1 font-semibold">
                  <p>25 Lacs+ units sold on Flipkart</p>
                  <p>3 Lacs+ 5<span class="text-yellow-500">★</span> reviews</p>
                </div>
                <div class="absolute right-4 bottom-4">
                  <img src={flipkart} alt="Flipkart Logo" class="h-10" />
                </div>
              </div>
              {/* <!-- Rewards and Payment Offers Section --> */}
              <div className='max-w-lg'>
                <h3 class="text-gray-800 font-bold">Rewards and Payment Offers</h3>
                <div class="mt-2 flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p class="text-gray-700 text-sm font-semibold">Earn upto 44 boAt reward points on this product</p>
                  <img src={boatrewardslogo} alt="Reward Icon" class="h-10" />
                </div>
              </div>
            <div class="p-4 border border-gray-200 rounded-md max-w-lg">

              {/* <!-- Active Offers Section --> */}
              <div className='flex flex-col'>
                <h3 class="text-gray-800 font-bold my-3">Active Offers</h3>
                <div class="mt-4 lg:grid lg:grid-cols-3 lg:gap-4 xss:space-y-7">
                  {/* <!-- Offer 1 --> */}
                  <div class="p-4 border border-green-600 rounded-t-xl bg-gray-100 text-center relative">
                    <p class="text-gray-800 text-sm">More than 2 Items</p>
                    <p class="mt-2 text-green-600 font-medium text-sm">Get 5% Off</p>
                    <p class="mt-4 text-lg font-bold">₹854<span class="text-gray-500 text-sm">/item</span></p>
                    <span class="absolute top-[98%] left-[-4px] px-3 py-1 bg-green-600 lg:w-[106%] xss:w-[102%] text-white text-xs font-semibold rounded">
                      MOST POPULAR
                    </span>
                  </div>
                  {/* <!-- Offer 2 --> */}
                  <div class="p-4 border border-green-600 rounded-t-xl bg-gray-100 text-center relative">
                    <p class="text-gray-800 text-sm">More than 5 Items</p>
                    <p class="mt-2 text-green-600 font-medium text-sm">Get 7% Off</p>
                    <p class="mt-4 text-lg font-bold">₹836<span class="text-gray-500 text-sm">/item</span></p>
                    <span class="absolute top-[98%] left-[-4px]  px-3 py-1 bg-gray-800 lg:w-[106%] xss:w-[102%] text-white text-xs font-semibold rounded">
                      BEST VALUE
                    </span>
                  </div>
                  {/* <!-- Offer 3 --> */}
                  <div class="p-4 border border-green-600 rounded-t-xl bg-gray-100 text-center relative">
                    <p class="text-gray-800 text-sm">More than 10 Items</p>
                    <p class="mt-2 text-green-600 font-medium text-sm">Get 10% Off</p>
                    <p class="mt-4 text-lg font-bold">₹809<span class="text-gray-500 text-sm">/item</span></p>
                    <span class="absolute top-[98%] left-[-4px]  px-3 py-1 bg-gray-800 lg:w-[106%] xss:w-[102%] text-white text-xs font-semibold rounded">
                      MOST SAVINGS
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- Action Buttons --> */}
              <div class="flex items-center justify-between gap-4 mt-10">
                <button class="flex-1 py-3 bg-black text-white font-medium text-sm rounded-xl hover:bg-gray-800">Add To Cart</button>
                <button class="flex-1 py-3 bg-green-600 text-white font-medium text-sm rounded-xl hover:bg-green-700">Buy Now</button>
              </div>
            </div>


          </div>
        </div>
          <div className='w-full flex bg-gray-100 justify-around leading-4 text-sm py-4 gap-5  '>
                    {tandc.map((data, index) => {
                        return <div key={index} className='xss:text-center sm:flex items-center gap-2'>
                            <img src={data.icon} />
                            <h1><b>{data.text1}</b><br />{data.text2}</h1>
                        </div>
                    })}
                </div>
            <div className='flex flex-col w-full items-center mt-10'>
              <img src={primg6} alt="" className='w-[95%]'/>
              {/* <img src={primg7} alt="" className='w-[50%] h-[50%]'/> */}
              <img src={primg8} alt="" className='w-[80%]'/>
            </div>

            {/* product specificatioin */}
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md font-bold">
      <h1 className="text-3xl font-bold mb-6">
        Product <span className="text-gray-800">Specifications</span>
      </h1>
      <div className="grid grid-cols-2 gap-6 text-gray-700">
        {/* Column 1 */}
        <div>
          <p><span className="font-semibold">Brand:</span> boAt</p>
          <p><span className="font-semibold">Product Description/ Name:</span> Airdopes 161</p>
          <p><span className="font-semibold">Maximum Retail Price:</span> ₹2,490</p>
          <p><span className="font-semibold">Net Content:</span></p>
          <ul className="ml-4 list-disc">
            <li>Airdopes 161</li>
            <li>1 Unit Type-C</li>
            <li>1 Unit User Manual</li>
            <li>1 Unit Warranty Card</li>
          </ul>
          <p><span className="font-semibold">Bluetooth Version:</span> 5.3</p>
          <p><span className="font-semibold">Country Of Origin:</span> China</p>
        </div>

        {/* Column 2 */}
        <div>
          <p><span className="font-semibold">Category/ Generic Name of Commodity:</span> Wireless Bluetooth Earbuds</p>
          <p><span className="font-semibold">IPX Rating:</span> IPX5</p>
          <p><span className="font-semibold">Warranty:</span> 1 Year from the date of Purchase</p>
          <p><span className="font-semibold">Working Time:</span> 5.5 Hours Per Charge, Up to 11 HRS additional with case</p>
          <p><span className="font-semibold">Driver Size:</span> 13mm</p>
          <p><span className="font-semibold">Beast Mode:</span> Yes</p>
          <p><span className="font-semibold">Net Quantity:</span> 1 Unit</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 text-gray-700">
        <p><span className="font-semibold">Marketed By:</span> Imagine Marketing Limited</p>
        <p><span className="font-semibold">Address:</span> Unit No. 204&205, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Andheri East, Mumbai-400093</p>
        <p><span className="font-semibold">For Consumer Complaints:</span></p>
        <p>022-6918-1920</p>
        <p>info@imaginemarketingindia.com</p>
      </div>
    </div>

        <Footer />
      </div>
    </>
  )
}

export default CardsDetails
