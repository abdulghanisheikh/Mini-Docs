import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";


const Card=({data})=>{
    return(
        <div className='relative w-60 h-75 rounded-[45px] m-3 bg-zinc-900/90 px-7 py-10 text-white overflow-hidden'>
            <FaFileAlt/>
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer py-3 absolute bottom-0 w-full h-25 left-0'>
                <div className='flex justify-between mb-3 px-4'>
                    {data.fileSize}
                    <span className='flex justify-center items-center w-6 h-6 bg-zinc-300 rounded-full'>
                        {data.close?<MdOutlineClose color='black'/>:<LuDownload size="0.9em" color='black'/>}
                    </span>
                </div>
                {data.tag.isOpen?(<div className='tag w-full py-4 text-center bg-green-600 flex justify-center items-center'>
                    <h3 className='font-semibold text-sm'>Download now</h3>
                </div>):null}
            </div>
        </div>
    )
}

export default Card;