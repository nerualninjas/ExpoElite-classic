import React from 'react';
import { Collapse } from 'react-collapse';
import { CiCircleMinus , CiCirclePlus } from "react-icons/ci";

const AccordianItems = ({open,toggle, title, desc}) => {
    return (
        <div className="pt-4">
            <div className='flex justify-between items-center cursor-pointer border-2 my-1 p-4 rounded border-[#005A44]' onClick={toggle}>
                <p className=''>{title}</p>
                {/* toggle icons */}
                <div>
                    {open ? <CiCircleMinus className='tezt-2xl' /> : <CiCirclePlus className='tezt-2xl' />}
                </div>
            </div>
            <Collapse isOpened={open}> 
                <div className='border-2 text-sm p-4 rounded border-[#005A44]'>{desc}</div>
            </Collapse>
        </div>
    );
};

export default AccordianItems;