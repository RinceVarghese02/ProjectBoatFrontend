import React from 'react'
import logo from '../images/logoimages/logoimg2.svg'

const Footer = () => {
  return (
    <>
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

export default Footer