import React from 'react';
import Image from 'next/image';

const SuccessfulStory = () => {
    return (
        <div>
            <div>
                <div className="py-10 my-10 text-center">
                    <h1 className="lg:text-3xl text-2xl font-bold mb-8 text-black">Read successful stories</h1>
                    <p className="lg:text-lg  text-sm font-medium pb-10 ">
                        Read the successful stories of ExpoElite </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10'>
                        <div className="relative flex flex-col w-full max-w-[18rem] mx-auto bg-white">
                            <Image width={300} height={500} className='rounded-lg' src={"https://i.postimg.cc/Vkvmt7gS/st1.jpg"} alt="picture" />
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black bg-opacity-30 text-white p-4">
                                <div className="text-center w-full">
                                    <div className='flex items-center justify-start gap-5'>
                                        <p className="text-xs">January 7, 2024</p>
                                        <p className="text-xs">Business</p>
                                    </div>
                                    <p className="text-sm">Skills That You Can Learn In The Real Estate Market</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full max-w-[18rem] mx-auto bg-white">
                            <Image width={300} height={500} className='rounded-lg' src={"https://i.postimg.cc/wj4J5Gdn/st2.jpg"} alt="picture" />
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black bg-opacity-30 text-white p-4">
                                <div className="text-center w-full">
                                    <div className='flex justify-start gap-5'>
                                        <p className="text-xs">January 01, 2024</p>
                                        <p className="text-xs">Construction</p>
                                    </div>
                                    <p className="text-sm">Learn The Truth About Real Estate Industry</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full max-w-[18rem] mx-auto bg-white">
                            <Image width={300} height={500} className='rounded-lg' src={"https://i.postimg.cc/7LTC3P9T/st3.jpg"} alt="picture" />
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black bg-opacity-30 text-white p-4">
                                <div className="text-center w-full">
                                    <div className='flex justify-start gap-5'>
                                        <p className="text-xs">January 11, 2024</p>
                                        <p className="text-xs">Real Estate</p>
                                    </div>
                                    <p className="text-sm">10 Quick Tips About Business Development</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="relative flex flex-col w-full max-w-[18rem] mx-auto bg-white">
                            <Image width={300} height={500} className='rounded-lg' src={"https://i.postimg.cc/7LTC3P9T/st3.jpg"} alt="picture" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent text-white p-4">
                                <div className="text-center w-full">
                                    <div className='flex justify-between items-end'>
                                        <p className="text-xs">January 11, 2024</p>
                                        <p className="text-xs">Real Estate</p>
                                    </div>
                                    <p className="text-sm">10 Quick Tips About Business Development</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="relative flex flex-col w-full max-w-[18rem] mx-auto bg-white ">
                            <Image width={300} height={500} className='rounded-lg' src={"https://i.postimg.cc/tTjgF37L/st4.jpg"} alt="picture" />
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black bg-opacity-30 text-white p-4">
                                <div className="text-center w-full">
                                    <div className='flex justify-start gap-5'>
                                        <p className="text-xs">January 15, 2024</p>
                                        <p className="text-xs">Real Estate</p>
                                    </div>
                                    <p className="text-sm">14 Common Misconceptions About Business Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessfulStory;