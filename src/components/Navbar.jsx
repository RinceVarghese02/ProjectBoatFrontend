import React, { useState } from 'react'
import img1 from '../images/logoimages/logoimg2.svg'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

    const navigate=useNavigate()
    const [toggle, settoggle] = useState(false)
    const [signintoggle, setsignintoggle] = useState(false)
    const [carttoggle, setcarttoggle] = useState(false)
    const [categories, setcategories] = useState(false)
    const [signuplogin, setsignuplogin] = useState(true)
    const [Menutoggle, setMenutoggle] = useState(false)
    const [resdataname, setresdataname] = useState(null)

    const [forminpdata, setforminpdata] = useState({})
    const [registerinp, setregisterinp] = useState({})
    function signin(){
        settoggle(!toggle)
        setsignintoggle(!signintoggle)
        setsignuplogin(false)
        setcategories(false)
    }
    function cart(){
        setcategories(false)
        settoggle(!toggle)
        setcarttoggle(!carttoggle)
    }
    function close(){
        settoggle(false)
        setsignintoggle(false)
        setcarttoggle(false)
    }
    function onsignuplogin(){
        setsignuplogin(!signuplogin)
    }
    function opencategories(){
        setcategories(!categories)
    }
    function home(){
        navigate('/')
    }
    function boatpersonalise(){
        navigate('/boatPersonalization')
    }
    function inpdata(e){
        var {name,value}=e.target;
        setforminpdata({...forminpdata,[name]:value})
        // console.log(forminpdata)
    }

    function senddata(e){
        e.preventDefault()
        axios.post('http://localhost:3000/login',forminpdata)
        .then((res)=>{
            {res.data.isLogin==true?close():''}
            // console.log(res.data.name)
            setresdataname(res.data.name)
        })
        .catch((err)=>{console.log(err)})
    }
    function registerformdata(e){
        var {name,value}=e.target;
        setregisterinp({...registerinp,[name]:value})
        console.log(registerinp)
    }
    function registerdata(e){
        e.preventDefault()
        axios.post('http://localhost:3000/register',registerinp)
        .then((res)=>{
            {res.data.isSignup==true?setsignuplogin(false):setsignuplogin(true)}
        })
        .catch((err)=>{console.log(err)})
    }

    function menutoggle(){
        setMenutoggle(!Menutoggle)
    }

  return (
    <>
    
    {/* Signin and Cart */}
    <div className="w-full h-full z-[11] fixed bg-black/80 flex items-center justify-center" style={{
        visibility:toggle?'visible':'hidden'
    }} onClick={close}>
    <div className="bg-white rounded-xl w-[90%] max-w-[500px] p-6 flex flex-col items-center" style={{
        visibility:signintoggle?'visible':'hidden'
    }} onClick={(e)=>e.stopPropagation()}>

        {signuplogin?<div className='flex flex-col items-center w-[94%]'>
        <h1 className="text-2xl font-semibold text-black/90 py-3">
            Get <span className="font-bold">started</span>
        </h1>
        <h1 className="text-gray-800 font-semibold text-sm pb-1 text-center">
            Please enter your details to Signup
        </h1>
        <h2>or <span className='text-gray-600 font-semibold cursor-pointer text-sm' onClick={onsignuplogin}>Login to your account</span></h2>
        <div className="flex flex-col bg-gray-200 rounded-lg p-6 w-full mt-4">
            <form onSubmit={(e)=>{registerdata(e)}}>

            <h1 className="text-gray-800 font-semibold py-2 text-center">Enter Your Name</h1>
            <div className="flex bg-white gap-3 py-2 rounded-lg font-semibold text-gray-500 w-full px-4">
                <input className="outline-none w-full text-center" name='name' type="text" onChange={(e)=>{registerformdata(e)}} placeholder="Type Here"/>
            </div>
            <h1 className="text-gray-800 font-semibold py-2 text-center">Enter Your Email</h1>
            <div className="flex bg-white gap-3 py-2 rounded-lg font-semibold text-gray-500 w-full px-4">
                <input className="outline-none w-full text-center" name='email' type="text" onChange={(e)=>{registerformdata(e)}} placeholder="Type Here"/>
            </div>  
            <h1 className="text-gray-800 font-semibold py-2 text-center">Enter Your Password</h1>
            <div className="flex bg-white gap-3 py-2 rounded-lg font-semibold text-gray-500 w-full px-4">
                <input className="outline-none w-full text-center" name='password' type="text" onChange={(e)=>{registerformdata(e)}} placeholder="Type Here"/>
            </div>
            <div className='flex justify-center'>
            <button type='submit' className="font-bold bg-gray-300 px-10 py-3 rounded-xl my-5">
                SUBMIT
            </button>
            </div>
            </form>
            <h1 className="text-center text-xs text-gray-400 font-bold">
                By Confirming, you agree to boAt's Terms and Conditions and <br />
                Privacy Policy.
            </h1>
        </div>
       </div>:<div className='flex flex-col items-center w-[94%]'>
        <h1 className="text-2xl font-semibold text-black/90 py-3">
            Get <span className="font-bold">started</span>
        </h1>
        <h1 className="text-gray-800 font-semibold text-sm pb-1 text-center">
            Please enter your details to Login
        </h1>
        <h2>or <span className='text-gray-600 font-semibold cursor-pointer text-sm' onClick={onsignuplogin}>Create a new account</span></h2>
        <div className="flex flex-col bg-gray-200 rounded-lg p-6 w-full mt-4">
            <form onSubmit={(e)=>{senddata(e)}}>
            <h1 className="text-gray-800 font-semibold py-2 text-center">Enter Your Name</h1>
            <div className="flex bg-white gap-3 py-2 rounded-lg font-semibold text-gray-500 w-full px-4">
                <input className="outline-none w-full text-center" name='name' onChange={(e)=>{inpdata(e)}} type="text" placeholder="Type Here"/>
            </div>
            <h1 className="text-gray-800 font-semibold py-2 text-center">Enter Your Password</h1>
            <div className="flex bg-white gap-3 py-2 rounded-lg font-semibold text-gray-500 w-full px-4">
                <input className="outline-none w-full text-center" name='password' onChange={(e)=>{inpdata(e)}} type="text" placeholder="Type Here"/>
            </div>
            <div className='flex justify-center'>
            <button type='submit' className="font-bold bg-gray-300 px-10 py-3 rounded-xl my-5">
                SUBMIT
            </button>
            </div>
            </form>
            <h1 className="text-center text-xs text-gray-400 font-bold">
                By Confirming, you agree to boAt's Terms and Conditions and <br />
                Privacy Policy.
            </h1>
        </div>
       </div>}
        
    </div>
 
    {/* cart section */}
    <div className='h-full lg:w-[32%] right-0 absolute bg-white transition-all duration-[600ms] ease-in-out'  style={{
        right:carttoggle?'0%':'-100%'
    }} onClick={(e)=>e.stopPropagation()}>
        <h1 className='text-2xl font-semibold p-5 text-gray-800'>Your Cart</h1>
        <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
            <h1 className='text-gray-800 text-2xl font-semibold text-center'>Your cart is feeling lonely</h1>
            <button className="font-bold bg-gray-800 text-[16px] px-10 py-3 rounded-xl my-3 text-white w-[50%]">Start Shopping</button>
        </div>
        
    </div>



</div>


    
    <div className='w-full border-b sticky top-0 z-[10]'>
        <div className='bg-[#EFF4F7] w-full flex justify-center cursor-pointer text-xs font-semibold text-center py-[10px] items-center'>
            <h1>Get 5% off on First Order | Code: <span className='font-bold'>WELCOME5 | <u>Shop Now!</u></span></h1>
        </div>
        <div className='flex justify-between items-center font-semibold py-6 px-10 bg-white'>
            <LuMenu className='xss:flex lg:hidden shrink-0 relative' onClick={menutoggle}/>
            <div className='flex xl:justify-between items-center lg:gap-14 text-center shrink-0 '>
                <img src={img1} className='xss:hidden xs:block h-[35px] cursor-pointer' onClick={home}/>
                <ul className='xss:hidden lg:flex lg:gap-5 text-gray-700'>
                    <li className='flex items-center gap-1 hover:text-black hover:font-bold cursor-pointer relative' onClick={opencategories}>Categories<IoIosArrowDown/></li>
                    <div className='absolute top-[100%] bg-white p-4 rounded-lg shadow-lg' 
                    style={{
                        visibility:categories?'visible':'hidden',
                    }}  >
                        <h1>True Wireless Earbuds</h1>
                        <h1>Wireless Speakers</h1>
                        <h1>Cables</h1>
                    </div>
                    <li onClick={boatpersonalise} className='hover:text-black hover:font-bold cursor-pointer'>boAt Personalisation</li>
                    <li>Corporate Orders</li>
                    <li className='flex items-center gap-1'>More<IoIosArrowDown/></li>
                </ul>

                {/* menubutton */}
                <ul className='text-gray-700 absolute left-0 top-[100%] bg-white rounded-lg text-center p-2 shadow-lg w-full flex-col gap-2 items-center' style={{
                    display:Menutoggle?'flex':'none',
                }}>
                    <li className='flex items-center gap-1 hover:text-black hover:font-bold cursor-pointer relative' onClick={opencategories}>Categories<IoIosArrowDown/></li>
                    <div className='absolute top-10 bg-white p-4 rounded-lg shadow-lg z-[99]' 
                    style={{
                        visibility:categories?'visible':'hidden',
                    }}  >
                        <h1>True Wireless Earbuds</h1>
                        <h1>Wireless Speakers</h1>
                        <h1>Cables</h1>
                    </div>
                    <li onClick={boatpersonalise} className='hover:text-black hover:font-bold cursor-pointer flex'>boAt Personalisation</li>
                    <li className='flex'>Corporate Orders</li>
                    <li className='flex items-center gap-1'>More<IoIosArrowDown/></li>
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <span className='flex items-center gap-2 bg-gray-200 rounded-3xl py-2 px-3'><IoSearchSharp className='text-2xl text-gray-600'/><input type='text' className='rounded-xl bg-gray-200 xss:hidden xs:block outline-none px-2' placeholder='Search "Earphones"' /></span>
                <IoPersonOutline className='text-2xl cursor-pointer active:scale-110' onClick={signin} />
                {resdataname?<h1 className=''>Hello {resdataname}!</h1>:<h1>Hello User!</h1>}
                <HiOutlineShoppingBag className='text-2xl cursor-pointer active:scale-110' onClick={cart}/>
            </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar