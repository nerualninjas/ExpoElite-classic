'use client'
import Lottie from "lottie-react";
import Ex from "./FAQ.json";
import AccordianItems from "./AccordianItems";
import { useState } from "react";
const FAQ = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }

        setOpen(index);
    }
    const accourdianData = [
        {
            title : "What is Expo Elite ?",
            desc  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. ",
        },
        {
            title : "What is Expo Elite ?",
            desc  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. ",
        },
        {
            title : "What is Expo Elite ?",
            desc  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. ",
        },
        {
            title : "What is Expo Elite ?",
            desc  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur. ",
        }
    ]
    return (
        <div>
             <h1 className="text-center text-4xl lg:text-5xl font-bold text-[#212121] mb-2">Frequently Asked Question</h1>
             <div className="flex flex-col md:flex-row items-center justify-center mx-4 py-1 px-4 rounded">
            {/* animation used */}
            <div className="w-1/3 md:w-1/2 mt-16 md:mt-1">
                <Lottie animationData={Ex} loop={true} />
            </div>
            <div className="w-2/3 md:w-1/2 mt-16 md:mt-1">
                <section className="bg-[#0c7e5c] rounded py-4">
                    {/* dyanamic data load */}
                    <div className="text-white text-xl px-8">
                        {accourdianData.map((item, index) => (
                            <AccordianItems open={open === index} toggle={() => toggle(index)} key={index} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
        </div>
        
    );
};

export default FAQ;