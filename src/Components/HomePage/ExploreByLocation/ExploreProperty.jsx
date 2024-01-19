"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';

const ExploreProperty = () => {


    const [properties, setProperties] = useState([]);


    useEffect(() => {
        fetch("properties.json")
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    // console.log(properties);

    return (
        <div>
            <div>
                <div className="py-10 my-10  text-center">
                    <h1 className="lg:text-5xl text-3xl font-bold mb-8 ">Explore By Location</h1>
                    <p className="lg:text-lg  text-sm font-medium pb-10 ">
                        Explore your desire property and purchase by your preference</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10'>
                        {
                            // properties.map(property => <PropertyCard key={property._id} image={property.image}></PropertyCard>)

                        }
                        {
                            properties?.map(property => <div key={property._id} className="flex w-full  max-w-[18rem] min-h-24 rounded-lg flex-col place-items-center mx-auto bg-white bg-clip-border shadow">
                                <Image width={300} height={200}  className='object-fit' src={property.image} alt="house" />
                            </div>)

                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExploreProperty;