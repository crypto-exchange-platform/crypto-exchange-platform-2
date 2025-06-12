import { FC } from "react";
import { Button } from "../ui/button";

export const TestimonialSection: FC = () => {
  return (
    <section className="w-full bg-[#2d0843]  py-24 px-6 text-black">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Customers Love What We Do
          </h2>
          <h4 className="text-md font-semibold text-white mb-3">
            Transform Your Idea Into Reality With Finsweet
          </h4>
          <p className="text-sm text-white  mb-6 max-w-md">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-white-300" />
              <div className="w-4 h-4 rounded-full bg-white-400" />
              <div className="w-4 h-4 rounded-full bg-white-300" />
            </div>
            <span className="text-xs text-white font-semibold">30+ Customer Reviews</span>
          </div>
        </div>

        <div className="relative bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329]  border-l-4 p-6 shadow-md border-[#2d0843] rounded-lg">
          <div className="text-xl font-semibold leading-relaxed mb-4 text-white">
            “Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code,
            I could easily understand and develop applications with the knowledge gathered during the course.”
          </div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-sm font-bold text-gray-600">Johnny Andro</p>
              <p className="text-xs text-gray-500">Director, Company</p>
            </div>
            <img src="/logo.svg" alt="Client logo" className="h-5" />
          </div>
        </div>
      </div>

   
    </section>
  );
};
 