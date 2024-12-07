import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[440px] relative bg-black">
      <div className="left-0 top-[376px] absolute opacity-40 flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-[1440px] h-[0px] relative opacity-50">
          <div className="w-[1440px] h-[0px] left-0 top-0 absolute opacity-40 border border-white"></div>
        </div>
        <div className="opacity-60 justify-start items-center gap-3 inline-flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 relative">
              <div className="w-[16.67px] h-[16.67px] left-[1.67px] top-[1.67px] absolute"></div>
            </div>
            <div className="text-white text-base font-normal font-['Poppins'] leading-normal">
              @Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
      <div className="left-[135px] top-[80px] absolute justify-center items-start gap-[87px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[118px] h-6 relative">
                <div className="left-0 top-0 absolute text-[#f9f9f9] text-2xl font-bold font-['Inter'] leading-normal tracking-wide">
                  Exclusive
                </div>
              </div>
              <div className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
                Subscribe
              </div>
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Get 10% off your first order
            </div>
          </div>
          <div className="w-[217px] h-12 pl-4 py-3 rounded border border-[#f9f9f9] justify-start items-center gap-4 inline-flex">
            <div className="opacity-40 text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Enter your email
            </div>

            <div className="w-6 h-6 relative" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15"
                stroke="#FAFAFA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
            Support
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[175px] text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              exclusive@gmail.com
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              +88015-88888-9999
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
            Account
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              My Account
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Login / Register
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Cart
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Wishlist
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Shop
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
            Quick Link
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Privacy Policy
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Terms Of Use
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              FAQ
            </div>
            <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
              Contact
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
              Download App
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-70 text-[#f9f9f9] text-xs font-medium font-['Poppins'] leading-[18px]">
                Save $3 with App New User Only
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-20 h-20 relative bg-black">
                  <img
                    className="w-[76px] h-[76px] left-[2px] top-[2px] absolute border-2 border-white"
                    src="/barcode.png"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[110px] h-10 relative bg-[#030406]">
                    <img
                      className="w-[104px] h-[30px] left-[3px] top-[5px] absolute rounded border border-[#f9f9f9]"
                      src="/googleplay.png"
                    />
                  </div>
                  <div className="w-[110px] h-10 relative bg-black">
                    <img
                      className="w-[104px] h-[34px] left-[3px] top-[3px] absolute rounded border border-white"
                      src="/appstore.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-6 h-6 relative" />

            <div className="w-6 h-6 relative">
              <div className="w-[27.06px] h-6 left-[-5px] top-0 absolute"></div>
            </div>
            <div className="w-6 h-6 relative">
              <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
