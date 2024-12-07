import React from "react";

const Newarrival = () => {
  return (
    <div className="flex justify-center items-center w-full wrapper">
      <div className="h-[768px] flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="h-[108px] justify-start items-end gap-[691px] inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 relative">
                <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
              </div>
              <div className="text-[#db4444] text-base font-semibold font-['Poppins'] leading-tight">
                Featured
              </div>
            </div>

            <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
              New Arrival
            </div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-[46px] h-[46px] relative">
              <img src="/fillleftarrow.png" alt="left arrow" />
              <div className="w-[46px] h-[46px] left-0 top-0 absolute  rounded-full" />
              <div className="w-6 h-6 left-[11px] top-[11px] absolute" />
            </div>
            <div className="w-[46px] h-[46px] relative">
              <img src="/fillrightarrow.png" alt="right arrow" />
              <div className="w-[46px] h-[46px] left-0 top-0 absolute  rounded-full" />

              <div className="w-6 h-6 left-[11px] top-[11px] absolute" />
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[30px] inline-flex">
          <div className="w-[570px] h-[600px] relative bg-black rounded">
            <img
              className="w-[511px] h-[511px] left-[29px] top-[89px] absolute"
              src="/playstation.png"
            />
            <div className="left-[32px] top-[446px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-[#f9f9f9] text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  PlayStation 5
                </div>
                <div className="w-[242px] text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
                  Black and White version of the PS5 coming out on sale.
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                  Shop Now
                </div>
                <div className="w-[81px] h-[0px] relative opacity-50">
                  <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-8 inline-flex">
            <div className="w-[570px] h-[286px] relative bg-[#0d0d0d] rounded">
              <img
                className="w-[432px] h-[286px] left-[140px]  absolute origin-top-left rotate-60"
                src="/woman.png"
              />
              <div className="left-[24px] top-[138px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-[#f9f9f9] text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                    Women&apos;s Collections
                  </div>
                  <div className="w-[255px] text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                    Shop Now
                  </div>
                  <div className="w-[81px] h-[0px] relative opacity-50">
                    <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-[30px] inline-flex">
              <div className="w-[270px] h-[284px] relative bg-black rounded">
                <div className="w-[210px] h-[222px] left-[30px] top-[31px] absolute">
                  <img
                    className="w-[190px] h-[221px] left-[10px] top-0 absolute"
                    src="/speakers.png"
                  />
                </div>
                <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#f9f9f9] text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                      Speakers
                    </div>
                    <div className="w-[191px] text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
                      Amazon wireless speakers
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                      Shop Now
                    </div>
                    <div className="w-[81px] h-[0px] relative opacity-50">
                      <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[270px] h-[284px] relative bg-black rounded">
                <div className="w-[210px] h-[222px] left-[30px] top-[30px] absolute">
                  <img
                    className="w-[201px] h-[203px] left-[4px] top-[8px] absolute"
                    src="perfume.png"
                  />
                </div>
                <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#f9f9f9] text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                      Perfume
                    </div>
                    <div className="w-[191px] text-[#f9f9f9] text-sm font-normal font-['Poppins'] leading-[21px]">
                      GUCCI INTENSE OUD EDP
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                      Shop Now
                    </div>
                    <div className="w-[81px] h-[0px] relative opacity-50">
                      <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
