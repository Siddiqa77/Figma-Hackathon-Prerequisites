
import Product from '@/components/product'
import ProductDetailPage from '@/components/productdetailpage'
import React from 'react'

const ProductDetail = () => {
  return (
    <div>
         <div className="left-[135px] mt-[60px] absolute justify-start items-center gap-1 inline-flex">
        <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
          Account
        </div>
        <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
          Gaming
        </div>
        <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
        Havic HV G-92 Gamepad
        </div>
      </div> 

<ProductDetailPage/>

<Product/>

    </div>
  )
}

export default ProductDetail