'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Count = () => {
    const [counter, setCounter] = useState(false)
    const countData = [
        {
            id: 1,
            count: 788,
            title: 'All Properties',
        },
        {
            id: 2,
            count: 399,
            title: ' All Agents   ',
        },
        {
            id: 3,
            count: 600,
            title: ' All Buyers   ',
        }
    ]
    return (
       <div className='my-10 mx-5 md:mx-24 py-10 px-6 md:px-20'>
          <h1 className="text-center text-4xl lg:text-5xl font-bold text-[#212121] mb-2">Our Statistics</h1>
          <h4 className="text-center py-2 mb-10 md:mb-20">Our all Statistics are here ........</h4>
          {/* scroll for count */}
        <ScrollTrigger onEnter={() => setCounter(true)}>
         <div className='flex flex-col md:flex-row justify-between items-center gap-2 ' >
            {
                // dynamically data load
                countData.map((data) => (
                    <div key={data.id} className="text-center p-8 border-xl shadow-2xl shadow-[#005A44] bg-[#0C7E5C] hover:bg-white text-white hover:text-[#005A44]  rounded mb-4">
                        <h1 className="text-4xl font-bold "> 
                           {counter && <CountUp start={0} end={data.count} duration={2} delay={0}/>} 
                           +
                        </h1>
                        <p className="text-xl pt-2">{data.title}</p>
                    </div>
                ))
            }
        </div>
        </ScrollTrigger>
       </div>
    );
};

export default Count;