import React, { useState } from 'react'
import Card from "./Card";

const Foreground=()=>{
  // const data=[description,fileSize,close,tagDetails]
  const data=[
    {desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",fileSize:'0.9mb',close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"Green",}}
  ]
  return(
    <div className='fixed z-[3] w-full h-full'>
        {data.map((item,id)=>{
          return <Card data={item}/>
        })}
    </div>
  )
}

export default Foreground;