import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center wrapper mt-[56px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:mx-auto p-5 w-full">
        {/* Sidebar */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
              Woman&apos;s Fashion
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
              Men&apos;s Fashion
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Electronics
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Home & Lifestyle
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Medicine
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Sports & Outdoor
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Baby&apos;s & Toys
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Groceries & Pets
          </div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Health & Beauty
          </div>
        </div>

        {/* Landing Image */}

        <div className="relative bg-black rounded-lg overflow-hidden w-full md:w-[892px] md:h-[344px] ">
          <img
            className="w-[496px] h-[352px] left-[396px] top-[16px] absolute object-cover"
            src="/hero1.png"
            alt="Hero Image"
          />
          <div className="absolute top-[58px] left-[64px] flex items-center gap-6">
            <img className="w-10 h-auto" src="/Apple.png" alt="Apple Logo" />
            <div className="text-white text-base font-normal font-['Poppins']">
              iPhone 14 Series
            </div>
          </div>
          <div className="absolute top-[127px] left-[64px] text-white text-5xl font-semibold font-['Inter'] leading-tight">
            Up to 10% <br />
            off Voucher
          </div>
          <div className="absolute top-[269px] left-[64px] flex items-center gap-2">
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                <span className="text-white text-base font-medium font-['Poppins']">
                  Shop Now
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="w-20 border-t border-white"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
            <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
            <div className="w-3.5 h-3.5 flex justify-center items-center relative">
              <div className="w-2.5 h-2.5 bg-[#db4444] rounded-full"></div>
              <div className="w-3.5 h-3.5 absolute border-2 border-white rounded-full"></div>
            </div>
            <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
            <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero