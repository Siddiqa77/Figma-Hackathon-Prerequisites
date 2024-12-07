import React from "react";

const TopHeader = () => {
  return (
    <div className="w-full h-12 flex bg-black">
      <div className="left-[445px] top-[12px] absolute justify-start items-start gap-[231px] inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-[474px] h-[18px] text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="text-center text-[#f9f9f9] text-sm font-semibold font-['Poppins'] underline leading-normal">
            ShopNow
          </div>
        </div>
        <div className="justify-center items-center gap-[5px] flex">
          <div className="text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
            English
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
