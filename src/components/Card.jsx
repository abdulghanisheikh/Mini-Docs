import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import {motion} from 'framer-motion';

const Card=({data,reference})=>{
    return(
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-75 rounded-[45px] m-3 bg-zinc-900/90 px-7 py-10 text-white overflow-hidden'>
            <FaFileAlt/>
            <p className='text-sm leading-tight mt-2 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex justify-between mb-2 px-4 py-3'>
                    {data.fileSize}
                    <span className='flex justify-center items-center w-6 h-6 bg-zinc-300 rounded-full'>
                        {data.close?<MdOutlineClose color='black'/>:<LuDownload size="0.9em" color='black'/>}
                    </span>
                </div>
                {data.tag.tagOpen&&(<div className={`tag w-full py-4 text-center ${data.tag.tagColor==='blue'?'bg-blue-600':'bg-green-600'} flex justify-center items-center`}>
                    <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
                </div>)}
            </div>
        </motion.div>
    )
}
export default Card;