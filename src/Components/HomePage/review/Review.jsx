'use client'

import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import member2 from '../../../assests/images/member2.png'
import member3 from '../../../assests/images/member3.png'
import member4 from '../../../assests/images/member4.png'
import './review.css'
import Image from 'next/image';
const Review = () => {




    return (
        <div className='container mx-auto mt-10  flex flex-col justify-center items-center'>
            {/* ----------------------------review section header-------------------------------- */}
            <div className='container mx-auto  mb-5 text-center w-full'>
                <h2 className="text-center text-4xl font-bold text-[#212121]">
                    What our Client&apos;s Saying
                </h2>

                <h4 className="text-center mt-3 mb-10 sm:mb-5 md:mb-5">Our Customers Voices of Satisfaction and Success</h4>

            </div>

            {/* ----------------------------review carousal container-------------------------------- */}
            <div className='mx-auto review-container mb-0'>

                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>

                    {/* ----------------------------review card 1-------------------------------- */}
                    <div className='review-card max-w-[300px] min-h-[400px] md:max-w-[480px] md:min-h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

                        <div className=" w-full h-full bg-cover ">

                            <div>
                                <div className="  card-body   ">
                                    <div className=''>
                                        <BiSolidQuoteLeft className=' text-6xl ' />
                                    </div>
                                    <div className='mx-auto pt-5 flex justify-center items-center text-center mx-30' >
                                        <p>1Exceptional API integration! Streamlined our property listings and boosted efficiency. A must-have for staying ahead in real estate.</p>
                                    </div>


                                </div>

                                {/* <hr className='hrStyle' /> */}
                                <hr className="w-full h-[1px] mx-0  bg-[#FFF] hover:bg-[#0C7E5C]" />


                                <div className=" flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full  ml-3 mt-3">
                                    <div>

                                        <Image src={member2} alt="Shoes" className="rounded-full w-[50px] h-[50px]" />

                                    </div>
                                    <div>
                                        <h2 className="ml-2">Tahsin Tarannum</h2>
                                        <div className="ml-2">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={3}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ----------------------------review card 2-------------------------------- */}
                    <div className='review-card max-w-[300px] min-h-[400px] md:max-w-[480px] md:min-h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

                        <div className=" w-full h-full bg-cover ">

                            <div>
                                <div className="  card-body   ">
                                    <div className='flex justify-start'>
                                        <BiSolidQuoteLeft className=' text-6xl ' />
                                    </div>
                                    <div className='mx-auto text-center' >
                                        <p>Exceptional API integration! Streamlined our property listings and boosted efficiency. A must-have for staying ahead in real estate.</p>
                                    </div>


                                </div>
                                <hr className="w-full h-[1px] mx-0  bg-[#FFF] hover:bg-[#0C7E5C]" />


                                <div className=" flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full  ml-3 mt-3">
                                    <div>

                                        <Image src={member3} alt="Shoes" className="rounded-full w-[50px] h-[50px]" />

                                    </div>
                                    <div>
                                        <h2 className="ml-2">Tahsin Tarannum</h2>
                                        <div className="ml-2">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={3}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ----------------------------review card 3-------------------------------- */}
                    <div className='review-card max-w-[300px] min-h-[400px] md:max-w-[480px] md:min-h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

                        <div className=" w-full h-full bg-cover ">

                            <div>
                                <div className="  card-body   ">
                                    <div className='flex justify-start'>
                                        <BiSolidQuoteLeft className=' text-6xl ' />
                                    </div>
                                    <div className='mx-auto text-center' >
                                        <p>Exceptional API integration! Streamlined our property listings and boosted efficiency. A must-have for staying ahead in real estate.</p>
                                    </div>


                                </div>
                                <hr className="w-full h-[1px] mx-0  bg-[#FFF] " />


                                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full  ml-3 mt-3">
                                    <div>

                                        <Image src={member4} alt="member" className="rounded-full w-[50px] h-[50px]" />

                                    </div>
                                    <div>
                                        <h2 className="ml-2">Tahsin Tarannum</h2>
                                        <div className="ml-2">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={3}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ----------------------------review card 4-------------------------------- */}
                    <div className='review-card max-w-[300px] min-h-[400px] md:max-w-[480px] md:min-h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

                        <div className=" w-full h-full bg-cover ">

                            <div>
                                <div className="  card-body   ">
                                    <div className='flex justify-start'>
                                        <BiSolidQuoteLeft className=' text-6xl ' />
                                    </div>
                                    <div className='mx-auto text-center' >
                                        <p>Exceptional API integration! Streamlined our property listings and boosted efficiency. A must-have for staying ahead in real estate.</p>
                                    </div>


                                </div>
                                <hr className="w-full h-[1px] mx-0  bg-[#FFF] hover:bg-[#0C7E5C]" />


                                <div className=" flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full  ml-3 mt-3">
                                    <div>

                                        <Image src={member2} alt="Shoes" className="rounded-full w-[50px] h-[50px]" />

                                    </div>
                                    <div>
                                        <h2 className="ml-2">Tahsin Tarannum</h2>
                                        <div className="ml-2">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={3}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ----------------------------review card 5-------------------------------- */}
                    <div className='review-card max-w-[300px] min-h-[400px] md:max-w-[480px] md:min-h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

                        <div className=" w-full h-full bg-cover ">

                            <div>
                                <div className="  card-body   ">
                                    <div className='flex justify-start'>
                                        <BiSolidQuoteLeft className=' text-6xl ' />
                                    </div>
                                    <div className='mx-auto text-center' >
                                        <p>Exceptional API integration! Streamlined our property listings and boosted efficiency. A must-have for staying ahead in real estate.</p>
                                    </div>


                                </div>
                                <hr className="w-full h-[1px] mx-0  bg-[#FFF] hover:bg-[#0C7E5C]" />


                                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full  ml-3 mt-3">
                                    <div>

                                        <Image src={member3} alt="Shoes" className="rounded-full w-[50px] h-[50px]" />

                                    </div>
                                    <div>
                                        <h2 className="ml-2">Tahsin Tarannum</h2>
                                        <div className="ml-2">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={3}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </ReactCardCarousel>
            </div>
        </div>

    );
}


export default Review;