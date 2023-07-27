import React from "react";
import Row from "../Row";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[40px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[50px] text-slate-950 font-light">Collections</h1>
          <p className="text-[20px] text-black mt-[22px]">
            You can explore and shop many products here different collections
            from various brands here.
          </p>
          <Button />
        </div>
        <div className="w-[46%]">
          <div className="w-[324px] h-[400px] relative">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="collection image"
              className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px] "
            />
            <div className="absolute animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]"></div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
