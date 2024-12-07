import Link from "next/link";
import React from "react";

const Button = () => {
  return (
   <div>
    <Link href="/productdetail"> 
    <div className="flex justify-center items-center top-[1219px]">
      <div className=" h-14 px-12 py-4 bg-[#db4444] rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">
          View All Products
        </div>
      </div>
    </div></Link>
   </div>
  );
};

export default Button;
