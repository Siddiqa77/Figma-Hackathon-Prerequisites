import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center items-center w-full mb-[140px] mt-[140px]">
      <div className="h-[161px] justify-center items-center gap-[88px] inline-flex">
        <div className="flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
              FREE AND FAST DELIVERY
            </div>
            <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-[21px]">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="w-[262px] flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute">
              <div className="w-10 h-10 left-0 top-0 absolute"></div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
              MONEY BACK GUARANTEE
            </div>
            <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
