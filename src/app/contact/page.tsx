
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
   <section className=" mb-[80px]">
       <div className="left-[135px] mt-[60px] absolute justify-start items-center gap-1 inline-flex">
        <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
          Home
        </div>
        <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
          Contact
        </div>
      </div>
      <div className="wrapper flex flex-row">
      {/* leftside */}
      <div className="w-[340px] h-[457px] top-[80px] relative bg-white rounded shadow">
        <div className="left-[35px] top-[40px] absolute flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-[#db4444] rounded-[31px]" />
              <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                Call To Us
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[262px] text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                We are available 24/7, 7 days a week.
              </div>
              <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Phone: +8801611112222
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[0px] relative opacity-50">
            <div className="w-[270px] h-[0px] left-0 top-0 absolute border border-black"></div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-[#db4444] rounded-[43px]" />
              <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                Write To US
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[250px] text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Emails: customer@exclusive.com
              </div>
              <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Emails: support@exclusive.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[457px] relative bg-white rounded shadow ">
        
        <div className="left-[31px] top-[40px] absolute flex-col justify-start items-end gap-8 inline-flex">
            
            

            {/* right side */}
          <div className="justify-start mt-[80px] items-start gap-4 inline-flex">
            
            <div className="w-[235px] h-[50px] relative">
              <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
              <div className="left-[16px] top-[13px] absolute opacity-50">
                <span className="text-black text-base font-normal font-['Poppins'] leading-normal">
                  Your Name{" "}
                </span>
                <span className="text-[#db4444] text-base font-normal font-['Poppins'] leading-normal">
                  *
                </span>
              </div>
            </div>
            <div className="w-[235px] h-[50px] relative">
              <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
              <div className="left-[16px] top-[13px] absolute opacity-50">
                <span className="text-black text-base font-normal font-['Poppins'] leading-normal">
                  Your Email{" "}
                </span>
                <span className="text-[#db4444] text-base font-normal font-['Poppins'] leading-normal">
                  *
                </span>
              </div>
            </div>
            <div className="w-[235px] h-[50px] relative">
              <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
              <div className="left-[16px] top-[13px] absolute opacity-50">
                <span className="text-black text-base font-normal font-['Poppins'] leading-normal">
                  Your Phone{" "}
                </span>
                <span className="text-[#db4444] text-base font-normal font-['Poppins'] leading-normal">
                  *
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-[737px] h-[207px] relative">
            <div className="w-[737px] h-[207px] left-0 top-0 absolute bg-neutral-100 rounded" />
            
            <div className="left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">
              Your Massage
              
            </div>
            
          </div>
         <Link href="/404error"> <div className="px-12 py-4 bg-[#db4444] mt-[34px]  rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">
              Send Massage
            </div>
          </div></Link>
          
        </div>
        
      </div>
      
    </div>
    </section>
  );
};

export default Contact;
