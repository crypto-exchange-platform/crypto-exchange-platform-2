import { FC } from "react";
import { Button } from "../ui/button";

const features = [
  {
    title: "Portfolio Manager",
    description: "Buy and sell popular digital currencies, keep track of them in one place.",
    icon: "/portfolio-icon.png", 
    bg: "bg-red-50",
  },
  {
    title: "Vault protection",
    description: "For added security, store your funds in a vault with time delayed withdrawals.",
    icon: "/vault-icon.png",
    bg: "bg-green-50",
  },
  {
    title: "Mobile Apps",
    description: "Stay on top of the markets with the Cryptolly app for Android or iOS.",
    icon: "/mobile-icon.png",
    bg: "bg-blue-50",
  },
];

export const TrustedPlatformSection: FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225]
 text-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full ">
          {features.map(({ title, description, icon, bg }, index) => (
            <div
              key={index}
              className={`rounded-xl ${bg} p-6 shadow-md  transition-transform duration-300 hover:-translate-y-1 `}
            >
              
              <h4 className="text-center font-bold text-md mb-2 ">{title}</h4>
              <p className="text-sm text-center text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            The Most Trusted <br /> Cryptocurrency Platform.
          </h2>
          <p className="text-white mb-6">
            Cryptolly has a variety of features that make it the best place to start trading
          </p>
          <Button className="bg-yellow-300 hover:bg-blue-700 text-black font-semibold px-6 py-3">
            Let’s Trade Now
          </Button>
        </div>
      </div>
    </section>
  );
};
 