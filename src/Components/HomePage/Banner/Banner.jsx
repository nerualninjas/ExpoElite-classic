import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen relative" >
                <Image width={1500} height={500} src={"https://i.postimg.cc/KYH65bG6/banner1.jpg"} alt='picture' />
                <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="hero-content text-center text-white absolute inset-0 flex items-center justify-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Search Your Next Home</h1>
                        <p className="py-6">Find new & featured property located in your local city</p>
                        <div className='mt-10 bg-white py-6 text-black rounded-lg max-w-full'>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto ">
                                <div className="col-span-full sm:col-span-2">
                                    <label for="city" className="text-sm">City/Street</label>
                                    <input type="text" placeholder="Location" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="Property" className="text-sm">Property Type</label>
                                    <input type="text" placeholder="Property Type" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="Price" className="text-sm">Price Range</label>
                                    <input type="text" placeholder="Price Range" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;