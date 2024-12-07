import React from 'react'

const ProductDetailPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4 mt-[100px] ">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg">
              <img
                src="/productpgpic.png"
                alt="Havic HV G-92 Gamepad"
                className="w-[446px] h-[315px] object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-16 ">
              <img
                src="/productpgpic2.png"
                alt="Thumbnail 1"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
              <img
                src="/productpgpic3.png"
                alt="Thumbnail 2"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
              <img
                src="/productpgpic4.png"
                alt="Thumbnail 3"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
               <img
                src="/productpgpic5.png"
                alt="Thumbnail 3"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            </div>
          </div>
  
          {/* Product Details Section */}
          <div className='mt-[90px]'>
            <h1 className="text-3xl font-bold">Havic HV G-92 Gamepad</h1>
            <p className="text-gray-500 mt-2">
             
              <span className="text-green-500">In Stock</span>
            </p>
            <p className="text-2xl font-semibold mt-4">$192.00</p>
            <p className="mt-2 text-gray-700">
              PlayStation 5 Controller Skin: High-quality vinyl with air channel
              adhesive for easy bubble-free install & mess-free removal.
              Pressure-sensitive.
            </p>
  
            {/* Colors */}
            <div className="mt-6">
              <h3 className="text-lg font-medium">Colours:</h3>
              <div className="flex gap-2 mt-2">
                <button className="w-8 h-8 rounded-full border bg-white"></button>
                <button className="w-8 h-8 rounded-full border bg-red-500"></button>
              </div>
            </div>
  
            {/* Sizes */}
            <div className="mt-6">
              <h3 className="text-lg font-medium">Size:</h3>
              <div className="flex gap-3 mt-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded text-gray-700"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Quantity and Actions */}
            <div className="mt-6 flex gap-4 items-center">
              <div className="flex items-center border rounded">
                <button className="px-4 py-2 text-gray-700">-</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2 text-gray-700">+</button>
              </div>
              <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg">
                Buy Now
              </button>
            </div>
  
            {/* Delivery Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M4.5 8.5h15m-12 6.5h9M5.5 20.5h13"
                  />
                </svg>
                <p className="text-gray-700">Free Delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h10.5v10.5H8.25z"
                  />
                </svg>
                <p className="text-gray-700">
                  Return Delivery within 30 Days. <a href="#" className="underline">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailPage;
  