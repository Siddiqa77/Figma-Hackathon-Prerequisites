import React from 'react'

const Error = () => {
  return (
<div>
    
<div className="left-[135px] mt-[60px] absolute justify-start items-center gap-1 inline-flex">
    <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
      Home
    </div>
    <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black/50"></div>
    <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
      404Error
    </div>
  </div>
<div className="w-[1440px] h-[1278px] relative bg-white wrapper">
       <div className="left-[306px] top-[200px] absolute flex-col justify-start items-center gap-10 inline-flex">
    <div className="text-black text-[110px] font-medium font-['Inter'] leading-[115px] tracking-[3.30px]">404 Not Found</div>
    <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Your visited page not found. You may go home page.</div>
  </div>
 
  <div className="px-12 py-4 left-[570px] top-[442px] absolute bg-[#db4444] rounded justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">Back to home page</div>
  </div>
    </div>
</div>
  )
}

export default Error