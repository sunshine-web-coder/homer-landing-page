import React from "react";
import TheSliderSlick from "./TheSliderSlick";

export default function Testimonial() {
  return (
    <div className="mt-[130px] h-[702px] bg-blue-600 pb-[81px] pl-4 md:pl-16 pr-4 md:pr-0 pt-[100px]">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-[28px] sm:text-[38px] md:text-5xl font-semibold text-neutral-100">
          What our clients say
        </h3>
      </div>
      <div className="mt-[50px] w-full">
        <TheSliderSlick />
      </div>
    </div>
  );
}
