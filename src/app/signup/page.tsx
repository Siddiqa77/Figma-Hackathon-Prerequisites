import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (

        <div className="h-[781px] justify-start items-center gap-[129px] inline-flex mt-10  mb-24">
  <div className="w-[805px] h-[781px] relative rounded-tr rounded-br">
    <img className="w-[919px] h-[706px] left-[8px] top-[75px] mt-[10px] absolute" src="/signuppic.png" />
  </div>
  <div className="flex-col justify-start items-start gap-12 inline-flex">
    <div className="flex-col justify-start items-start gap-6 flex">
      <div className="text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Create an account</div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Enter your details below</div>
    </div>
    <div className="flex-col justify-start items-center gap-10 flex">
      <div className="flex-col justify-start items-start gap-10 flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Name</div>
          <div className="w-[370px] h-[0px] relative opacity-50">
            <div className="w-[370px] h-[0px] left-0 top-0 absolute border border-black"></div>
          </div>
        </div>
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
      <div className="flex-col justify-start items-start gap-4 flex">
      <div className="h-14 px-[122px] py-4 bg-[#db4444] rounded justify-center items-center gap-2.5 inline-flex">
  <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">Create Account</div>
</div>
        <div className="flex-col justify-start items-center gap-8 flex">
          <div className="px-[86px] py-4 rounded border border-black/40 flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-6 h-6 relative" />
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
<g clip-path="url(#clip0_22855_3336)">
<path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
<path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
<path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
<path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_22855_3336">
<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg> 
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Sign up with Google</div>
            </div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="opacity-70 text-black text-base font-normal font-['Poppins'] leading-normal">Already have account?</div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
             <Link href="/login" className="opacity-70 text-black text-base font-medium font-['Poppins'] leading-normal">Login</Link>
              <div className="w-[47px] h-[0px] relative opacity-50">
                <div className="w-[47px] h-[0px] left-0 top-0 absolute border border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup