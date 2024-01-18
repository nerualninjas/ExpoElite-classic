import React from 'react';
import house1 from '../../../assests/images/house1.jpg'
import house2 from '../../../assests/images/house2.jpg'
import Image from 'next/image';

const OurMission = () => {
    return (
        <div className='w-full mx-auto mb-10 flex flex-col items-center justify-center'>
            <div className='w-full pb-10'>

            <div className=" w-full hero min-h-[50vh] mb-10 " style={{backgroundImage: `url(https://i.ibb.co/BjfvDPr/1.jpg)`}}>
  <div className="hero-overlay bg-green-100 bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Us</h1>
      <p className="mb-5">ExpoElite emerged from a shared vision of creating a space where every property transaction is an experience worth cherishing.</p>
      
    </div>
  </div>

</div>

               <div className='container mx-auto w-11/12 flex flex-col justify-center '>

               <div className="  mx-auto w-full lg:w-11/12 box1  flex flex-col items-center justify-center lg:justify-between lg:flex-row mb-5">
                   <div className=' w-11/12 lg:w-1/2 flex items-center justify-center lg:justify-start'><Image className='w-[500px]' src={house1} alt="house" /></div>

                    <div className=" w-11/12 lg:w-1/2 flex flex-col text-center lg:text-left">
                        <h2 className='text-[#005A44] font-bold mb-2'>About Us</h2>
                        <h1 className='text-2xl font-extrabold mb-2'>Transforming Visions into Realty - Your <br /> Future in Property Starts Here</h1>
                        <p className="text-md" >
                        Welcome to ExpoElite, your premier destination for a revolutionary property selling and exhibition experience. At ExpoElite, we pride ourselves on being at the forefront of innovation, 
                        connecting individuals seeking their dream homes, dynamic property developers, and those exploring rental opportunities.
                        Our journey began with the realization that the conventional methods of buying, selling, and renting properties lacked the efficiency and excitement that today's tech-savvy users crave.
                        </p>
                    </div>
                </div>

                


                <div className="mx-auto w-full lg:w-11/12 box2  flex flex-col lg:flex-row-reverse  items-center justify-center lg:justify-between mb-2 ">
                <div className='w-11/12 lg:w-1/2 border-5 flex items-center justify-center lg:justify-end'><Image className='w-[500px]' src={house2} alt="house" /></div>

                    <div className="w-11/12 lg:w-1/2  text-center lg:text-left">
                        <h2 className='text-[#005A44] font-bold mb-2'>Our Mission</h2>
                        <h1 className='text-2xl font-extrabold mb-2'>Pioneering the Future of <br /> Real Estate Transactions</h1>
                        <p className="text-md">
                        At ExpoElite, our mission is clear – to empower dreams by revolutionizing the property market.
                         We strive to create a platform that goes beyond transactions, turning each interaction into a step towards fulfilling aspirations.
                          Whether you're envisioning your dream home, developing the next architectural marvel, or seeking the perfect rental space,
                         ExpoElite is here to make your journey seamless and rewarding.
                        </p>
                       
                    </div>

                    
                </div>
               </div>

            </div>
        </div>
    );
};

export default OurMission;