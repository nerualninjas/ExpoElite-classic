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
        <div>
            {/* ----------------------------review section header-------------------------------- */}
            <div className='w-full text-center '>
                <h2 className="text-center text-4xl font-bold text-[#212121]">
                    What our Client's Saying
                </h2>
                <h4 className="text-center py-2">Hear from our customers, Voices of Satisfaction and Success</h4>
            </div>

            {/* ----------------------------review carousal container-------------------------------- */}
            <div className='review-container '>

                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>

                    {/* ----------------------------review card 1-------------------------------- */}
                    <div className='review-card w-[300px] h-[400px] md:w-[480px] md:h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

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
                                {/* className={this.hoverHrStyle} */}
                                <hr className='hrStyle' />


                                <div className=" flex items-center justify-start w-full  ml-3 mt-3">
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
                    <div className='review-card w-[300px] h-[400px] md:w-[480px] md:h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

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


                                <div className=" flex items-center justify-start w-full  ml-3 mt-3">
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
                    <div className='review-card w-[300px] h-[400px] md:w-[480px] md:h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

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


                                <div className=" flex items-center justify-start w-full  ml-3 mt-3">
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
                    <div className='review-card w-[300px] h-[400px] md:w-[480px] md:h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

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


                                <div className=" flex items-center justify-start w-full  ml-3 mt-3">
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
                    <div className='review-card w-[300px] h-[400px] md:w-[480px] md:h-[300px] bg-[#0C7E5C] text-white hover:bg-[#FFF] hover:text-[#0C7E5C]' >

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


                                <div className=" flex items-center justify-start w-full  ml-3 mt-3">
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