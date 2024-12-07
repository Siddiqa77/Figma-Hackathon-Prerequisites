import React from 'react'

const Login = () => {
  return (
    <div className="h-[781px] justify-start items-center gap-[129px] inline-flex  mt-5  mb-24">
    <div className="w-[805px] h-[781px] relative  rounded-tr rounded-br">
    <img className="w-[919px] h-[706px] left-[-8px] top-[75px] mt-[10px] absolute" src="/signuppic.png" />
    </div>
    <div className="flex-col justify-start items-start gap-10 inline-flex">
      <div className="flex-col justify-start items-start gap-12 flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Log in to Exclusive</div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Enter your details below</div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Email or Phone Number</div>
            <div className="w-[370px] h-[0px] relative opacity-50">
              <div className="w-[370px] h-[0px] left-0 top-0 absolute border border-black"></div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Password</div>
            <div className="w-[370px] h-[0px] relative opacity-50">
              <div className="w-[370px] h-[0px] left-0 top-0 absolute border border-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-[87px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="px-12 py-4 bg-[#db4444] rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">Log In</div>
          </div>
        </div>
        <div className="text-[#db4444] text-base font-normal font-['Poppins'] leading-normal">Forget Password?</div>
      </div>
    </div>
  </div>
  )
}

export default Login