import React from 'react';
import Image from 'next/image';
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Banner = () => {
    return (
        <div>
            <div className="hero md:min-h-[700px] relative " style={{ backgroundImage: 'url(https://i.postimg.cc/KYH65bG6/banner1.jpg)' }}>
                {/* <Image width={1500} height={500} src={"https://i.postimg.cc/KYH65bG6/banner1.jpg"} alt='picture' /> */}
                <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="hero-content mx-auto  text-center text-white absolute inset-0 flex items-center justify-center">
                    <div className="max-w-full  mx-auto">
                        <h1 className="text-5xl font-bold">Search Your Next Home</h1>
                        <p className="py-6">Find new & featured property located in your local city</p>
                        <div className='mt-10 bg-white py-6 text-black rounded-lg'>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 w-full mx-auto">
                                <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100  card-bordered">
                                    <h1 className="font-bold text-left">Location</h1>
                                    <div className="flex gap-x-2">
                                        <BiMap />
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-0 outline-none"
                                            placeholder="Enter location of the property"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 card-bordered">
                                    <h1 className="font-bold text-left">Property Type</h1>
                                    <div className="flex gap-x-2">
                                        <BiBuildings />
                                        <select
                                            name=""
                                            id=""
                                            className="w-full bg-transparent border-0 outline-none opacity-70"
                                        >
                                            <option value="condors">Condors</option>
                                            <option value="offfice buildings">Offfice Buildings</option>
                                            <option value="apartments">Apartments</option>
                                            <option value="mansions">Mansions</option>
                                            <option value="real estate">Real Estate</option>
                                            <option value="penthouse">Penthouse</option>
                                            <option value="living room">Living Room</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 card-bordered">
                                    <h1 className="font-bold text-left">Price range</h1>
                                    <div className="flex gap-x-2">
                                        <BiMoney />
                                        <select
                                            name=""
                                            id=""
                                            className="w-full bg-transparent border-0 outline-none opacity-70"
                                        >
                                            <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                                            <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                                            <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                                            <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                                            <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                                            <option value="$500,000 - $1000,000">
                                                $500,000 - $1000,000
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-1 w-full mx-auto p-2 border rounded-lg md:w-fit bg-slate-100 ">
                                    <h1 className="font-bold text-left">For</h1>
                                    <div className="flex gap-x-2">
                                        <BiBriefcase />
                                        <select
                                            name=""
                                            id=""
                                            className="w-full bg-transparent border-0 outline-none opacity-7"
                                        >
                                            <option value="sell">Sell</option>
                                            <option value="rent">Rent</option>
                                        </select>
                                    </div>
                                </div>
                                <button className=" btn px-9 py-3 text-black bg-base-700 md:w-fit">Advanced Filter</button>
                                <button className=" btn px-9 py-3 font-bold text-white bg-green-700 md:w-fit">search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
