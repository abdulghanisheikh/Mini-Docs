import React from 'react'
const Background=()=>{
  return(
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full py-10 flex justify-center absolute top-[5%] text-zinc-600 font-bold text-xl'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold text-[13vw] leading-none tracking-tight'>Docs.</h1>
    </div>
    </>
  )
}

export default Background;