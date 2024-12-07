import Gridrow from "@/components/grid-row";
import React from "react";

const Cart = () => {
  return (
    <>
      <Gridrow>
        <div className="text-lg w-full flex items-center justify-center">
          Product
        </div>
        <div className="text-lg w-full flex items-center justify-center">
          Price
        </div>
        <div className="text-lg w-full flex items-center justify-center">
          Quantity
        </div>
        <div className="text-lg w-full flex items-center justify-center">
          Total
        </div>
      </Gridrow>
      <Gridrow>
        {/* name */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          Car toy
        </div>
        {/* price */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          500$
        </div>
        {/* quantity */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          2
        </div>
        {/* subtotal */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          1000$
        </div>
      </Gridrow>
      <Gridrow>
        {/* name */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          Car toy
        </div>
        {/* price */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          500$
        </div>
        {/* quantity */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          2
        </div>
        {/* subtotal */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          1000$
        </div>
      </Gridrow>
      <Gridrow>
        {/* name */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          Car toy
        </div>
        {/* price */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          500$
        </div>
        {/* quantity */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          2
        </div>
        {/* subtotal */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          1000$
        </div>
      </Gridrow>
      <Gridrow>
        {/* name */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          Car toy
        </div>
        {/* price */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          500$
        </div>
        {/* quantity */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          2
        </div>
        {/* subtotal */}
        <div className="text-lg w-full flex items-center justify-center mt-[60px]">
          1000$
        </div>
      </Gridrow>
    </>
  );
};

export default Cart;
