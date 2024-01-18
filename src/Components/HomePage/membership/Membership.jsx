import React from 'react';

import { FaCheck, FaCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Membership = () => {

    return (
        <div className='min-h-[100vh] w-full'>
             <div className='w-full text-center '>
                <h2 className="text-center text-4xl font-bold text-[#212121]">
                Select Your Package
                </h2>
                <h4 className="text-center py-2">Tailored Choices: Select Your Ideal Package for a Personalized Experience</h4>
            </div>
            <div className=" mx-auto w-full body flex flex-col lg:flex-row justify-around items-center gap-5">
                <div className=" membership-card card w-[400px] bg-base-100 shadow-md mb-5">

                    <div className="card-body items-center text-center">

                        <h3 className='font-bold text-xl '>Basic</h3>
                        <h1 className='font-bold text-3xl'><span className='text-xl'>$</span>49</h1>

                        <ul className=' py-5'>
                        <li className='  flex gap-2 items-center py-2'><span ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></span><p className='text-left'>99.5% Uptime Guarantee</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>150GB CDN Bandwidth</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>10GB Cloud Storage</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><RxCross2 className='bg-red-200 text-xl  text-red-700  rounded-full p-1' /></label><p className='text-left'>Personal Help Support</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><RxCross2 className='bg-red-200 text-xl  text-red-700  rounded-full p-1' /></label><p className='text-left'>Enterprise SLA</p></li>

                        </ul>

                        <div className="card-actions">
                            <button className="btn bg-[#0C7E5C] px-24 py-3 mt-3 text-white  rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className=" membership-card card w-[400px] bg-base-100 shadow-xl mb-5">

                    <div className="card-body items-center text-center">
                        <div className="">
                            <button className="btn bg-[#FBBD23] px-10 py-3 my-3  rounded-full">Best value</button>
                        </div>
                        <h3 className='font-bold text-xl '>Standard</h3>
                        <h1 className='font-bold text-3xl'><span className='text-xl'>$</span>49</h1>

                        <ul className=' py-5'>
                        <li className='  flex gap-2 items-center py-2'><span ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></span><p className='text-left'>99.5% Uptime Guarantee</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>150GB CDN Bandwidth</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>10GB Cloud Storage</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>Personal Help Support</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><RxCross2 className='bg-red-200 text-xl  text-red-700  rounded-full p-1' /></label><p className='text-left'>Enterprise SLA</p></li>
                        </ul>

                        <div className="card-actions">
                            <button className="btn bg-[#0C7E5C] px-24 py-3 mt-3 text-white  rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className=" membership-card card w-[400px] bg-base-100 shadow-md mb-5">

                    <div className="card-body items-center text-center">
                       
                        <h3 className='font-bold text-xl '>Platinum</h3>
                        <h1 className='font-bold text-3xl'><span className='text-xl'>$</span>79</h1>

                        <ul className=' py-5'>
                            <li className='  flex gap-2 items-center py-2'><span ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></span><p className='text-left'>99.5% Uptime Guarantee</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>150GB CDN Bandwidth</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>10GB Cloud Storage</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>Personal Help Support</p></li>
                            <li className=' flex gap-2 items-center py-2'><label ><FaCheck className='bg-green-200 text-xl text-green-700 rounded-full p-1' /></label><p className='text-left'>Enterprise SLA</p></li>
                        </ul>

                        <div className="card-actions">
                            <button className="btn bg-[#0C7E5C] px-24 py-3 mt-3 text-white  rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;