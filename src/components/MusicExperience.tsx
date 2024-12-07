import React from 'react'

const MusicExperience = () => {
  return (
    <section className='wrapper'>
        <div className="w-[1170px] h-[500px] relative bg-black">
    <div className="w-[504px] h-[500px] left-[552px] top-0 absolute opacity-30 bg-[#d9d9d9] rounded-full blur-[200px]" />
    <div className="w-[443px] left-[56px] top-[121px] absolute text-[#f9f9f9] text-5xl font-semibold font-['Inter'] leading-[60px] tracking-normal">Enhance Your <br /> Music Experience</div>
    <div className="left-[56px] top-[273px] absolute justify-start items-start gap-6 inline-flex">
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0  absolute bg-white rounded-full" />
        <div className="left-[15px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">23</div>
          <div className="w-8 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Hours</div>
        </div>
      </div>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="left-[17px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">05</div>
          <div className="w-7 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Days</div>
        </div>
      </div>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="h-[34px] left-[10px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">59</div>
          <div className="w-[43px] text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Minutes</div>
        </div>
      </div>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="h-[34px] left-[7px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">35</div>
          <div className="w-12 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Seconds</div>
        </div>
      </div>
    </div>
    <div className="px-12 py-4 left-[56px] top-[375px] absolute bg-[#00ff66] rounded justify-center items-center gap-2.5 inline-flex">
      <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">Buy Now!</div>
    </div>
    <div className="left-[56px] top-[69px] absolute text-[#00ff66] text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
    <div className="w-[600px] h-[420px] left-[526px] top-[37px] absolute">
      <img className="w-[568px] h-[330px] left-[584px] top-[380px] absolute origin-top-left -rotate-180" src="/boombox.png" />
    </div>
  </div></section>
  )
}

export default MusicExperience