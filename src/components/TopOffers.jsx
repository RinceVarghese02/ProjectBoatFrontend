import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logoimages/logoimg2.svg'
import img1 from '../images/topoffersimages/topoffersimg1.webp'
import img2 from '../images/topoffersimages/topoffersimg2.png'
import img3 from '../images/topoffersimages/topoffersimg3.webp'
import img4 from '../images/topoffersimages/topoffersimg4.webp'
import img5 from '../images/topoffersimages/topoffersimg5.webp'
import img6 from '../images/topoffersimages/topoffersimg6.webp'
import mbimg1 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb1.png'
import mbimg2 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb2.png'
import mbimg3 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb3.png'
import mbimg4 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb4.png'
import mbimg5 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb5.jpg'
import mbimg6 from '../images/topoffersimages/topoffersimagesmb/topoffersimagesmb6.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img7 from '../images/tandcimages/tandcimg1.svg'
import img8 from '../images/tandcimages/tandcimg2.svg'
import img9 from '../images/tandcimages/tandcimg3.svg'
import img10 from '../images/tandcimages/tandcimg4.svg'
import Cards from './Cards'
// import data from '../components/saleislivedata.json'
// import data1 from '../components/categoriescards.json'
import data2 from '../components/productvideos.json'
import { FiArrowRightCircle } from "react-icons/fi";
import CategoriesCards from '../components/CategoriesCards'
import ProductVideos from './productvideos'
import axios from 'axios'

const TopOffers = () => {

    const [data,setdata]=useState([]);
    const [data1,setdata1]=useState([]);

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

    useEffect(()=>{
        axios.get("http://localhost:3000/product/allcategoriesdata")
        .then((data1)=>{
            // setdata(data.response)
            setdata1(data1.data.allcategories)
            console.log(data1.data.allcategories)
        })
        .catch((err)=>{
            console.log(err )
        })
    },[])
    console.log(data1)

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

    return (
        <>
            <div className='w-full '>
                <IoIosArrowForward className='absolute select-none right-5 text-white bg-[#1A2024]  h-10 w-10 rounded-full p-3 xss:hidden xs:block z-[4] xs:top-[60%] hover:border-2 hover:border-gray-600' onClick={right} />
                <IoIosArrowBack className='absolute select-none left-5 text-white bg-[#1A2024]  h-10 w-10 rounded-full p-3 xss:hidden xs:block z-[4] xs:top-[60%] hover:border-2 hover:border-gray-600' onClick={left} />
                <div className='relative xss:hidden xs:flex overflow-auto scrollbar-hidden snap-x snap-mandatory z-1' ref={scrollref}>
                    <img src={img2} className='min-w-full h-full snap-center' />
                    <img src={img1} className='min-w-full h-full snap-center' />
                    <img src={img3} className='min-w-full h-full snap-center' />
                    <img src={img4} className='min-w-full h-full snap-center' />
                    <img src={img5} className='min-w-full h-full snap-center' />
                    <img src={img6} className='min-w-full h-full snap-center' />
                </div>
                <div className='relative xs:hidden xss:flex overflow-auto scrollbar-hidden snap-x snap-mandatory z-1'>
                    <img src={mbimg1} className='min-w-full h-full snap-center' />
                    <img src={mbimg2} className='min-w-full h-full snap-center' />
                    <img src={mbimg3} className='min-w-full h-full snap-center' />
                    <img src={mbimg4} className='min-w-full h-full snap-center' />
                    <img src={mbimg5} className='min-w-full h-full snap-center' />
                    <img src={mbimg6} className='min-w-full h-full snap-center' />
                </div>
                <div className='w-full flex bg-gray-100 justify-around leading-4 text-sm py-4 gap-5 '>
                    {tandc.map((data, index) => {
                        return <div key={index} className='xss:text-center sm:flex items-center gap-2'>
                            <img src={data.icon} />
                            <h1><b>{data.text1}</b><br />{data.text2}</h1>
                        </div>
                    })}
                </div>
            </div>
            <div className='flex justify-between px-10 py-6 '>
                <h1 className=' text-2xl text-black/80 font-semibold'>Sale <b>Is Li<u className='text-red-500'>ve</u></b></h1>
                <h1 className='flex items-center gap-2 text-sm font-bold text-[#367FAE]'>View All <FiArrowRightCircle /></h1>
            </div>

            <div className='flex flex-wrap gap-1 justify-center xss:px-2 xs:px-10'>

                {data.slice(0, 6).map((data, index) => {
                    return <div key={index}>
                        <Cards data={data} />
                    </div>
                })}
            </div>

            <div className='flex justify-between px-10 py-6 '>
                <h1 className=' text-2xl text-black/80 font-semibold'>Xmas <b>De<u className='text-red-500'>als</u></b></h1>
                <h1 className='flex items-center gap-2 text-sm font-bold text-[#367FAE]'>View All <FiArrowRightCircle /></h1>
            </div>

            <div className='flex flex-wrap gap-1 justify-center xss:px-2 xs:px-10'>

                {data.slice(2, 8).map((data, index) => {
                    return <div key={index}>
                        <Cards data={data} />
                    </div>
                })}
            </div>
            <div className='flex justify-between px-10 py-4 '>
                <h1 className=' text-2xl text-black/80 font-semibold'>Shop By <b>Categori<u className='text-red-500'>es</u></b></h1>
                <h1 className='flex items-center gap-2 text-sm font-bold text-[#367FAE]'>View All <FiArrowRightCircle /></h1>
            </div>

            <div className='flex flex-wrap gap-9 justify-center xss:px-2 xs:px-10'>

                {data1.map((data, index) => {
                    return <div key={index}>
                        <CategoriesCards data={data} />
                    </div>
                })}
            </div>

            <div className='flex justify-between px-10 py-6 '>
                <h1 className=' text-2xl text-black/80 font-semibold'>Explore <b>Best Selle<u className='text-red-500'>rs</u></b></h1>
            </div>
            <div className='flex overflow-auto gap-2 sm:mx-14 xss:mx-2 pt-3 pb-8 mb-6 scrollbar-hidden'>

                {data2.map((data, index) => {
                    return <div key={index}>
                        <ProductVideos data={data} />
                    </div>
                })}
            </div>

            <div className='flex justify-between px-10 py-6 '>
                <h1 className=' text-2xl text-black/80 font-semibold'>Top Picks For <b>Y<u className='text-red-500'>ou</u></b></h1>
                <h1 className='flex items-center gap-2 text-sm font-bold text-[#367FAE]'>View All <FiArrowRightCircle /></h1>
            </div>

            <div className='flex flex-wrap gap-1 justify-center xss:px-2 xs:px-10'>

                {data.slice(0, 6).map((data, index) => {
                    return <div key={index}>
                        <Cards data={data} />
                    </div>
                })}
            </div>
            

            {/* Footer */}
            <div className="bg-[#eaf4fc] p-12 m-4 mt-10">
                {/* Container */}
                <div className="md:block lg:flex justify-center gap-20">
                    {/* Logo and Email Section */}
                    <div className="mb-8 lg:mb-0">
                        <img
                            src={logo}
                            alt="boAt Logo"
                            className="w-[150px] mb-4"
                        />
                        <p className="text-lg font-semibold mb-2">Subscribe to our email alerts!</p>
                        <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-grow px-4 py-2 focus:outline-none"
                            />
                            <button className="bg-gray-800 text-white px-4 py-2">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col lg:flex-row lg:space-x-10">
                        {/* Shop Column */}
                        <div className="mb-6 lg:mb-0">
                            <h3 className="font-semibold mb-4">Shop</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>True Wireless Earbuds</li>
                                <li>Wired Headphones</li>
                                <li>Home Audio</li>
                                <li>Smart Watches</li>
                                <li>Misfit Trimmers</li>
                                <li>Wireless Headphones</li>
                                <li>Wireless Speakers</li>
                                <li>Mobile Accessories</li>
                                <li>TRebel</li>
                                <li>Refer & Earn</li>
                            </ul>
                        </div>

                        {/* Help Column */}
                        <div className="mb-6 lg:mb-0">
                            <h3 className="font-semibold mb-4">Help</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Track Your Order</li>
                                <li>Warranty & Support</li>
                                <li>Return Policy</li>
                                <li>Service Centers</li>
                                <li>Bulk Orders</li>
                                <li>Why Buy Direct</li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>About boAt</li>
                                <li>News</li>
                                <li>Read Our Blog</li>
                                <li>Careers</li>
                                <li>Security</li>
                                <li>Investor Relations</li>
                                <li>Social Responsibility</li>
                                <li>Warranty Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopOffers