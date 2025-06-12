import { FC } from "react";
import { Button } from "../ui/button";

const promotions = [
  {
    title: "🎉 WIN 20 USDT!",
    subtitle: "Tap to unlock your guaranteed prize now!",
  },
  {
    title: "🏆 VIP TRADING CHALLENGE",
    subtitle: "Compete for an Omega watch + 8,000 USDT pool!",
  },
  {
    title: "🌙 RAMADAN BLESSINGS",
    subtitle: "Enjoy higher rewards with easier tasks during Ramadan.",
  },
  {
    title: "💎 BECOME A VIP CLIENT",
    subtitle: "Join now and claim your 8,000 USDT welcome gift.",
  },
];

export const HeroSpinPrize: FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329] text-white py-24 px-4 overflow-hidden">
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .promo-box {
            transition: transform 0.3s ease, border 0.3s ease;
          }
          .promo-box:hover {
            transform: translateY(-5px) scale(1.03);
          }
        `}
      </style>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Spin & Score <span className="text-yellow-300">Guaranteed Rewards</span>
          </h1>
          <p className="text-base text-white/80 max-w-md">
            Join the fun and claim tokens like ADA, XRP, SOL, and more — instantly!
          </p>

          <form className="flex w-full max-w-md overflow-hidden rounded border border-white/30 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Enter email or phone number"
              className="flex-1 bg-transparent px-4 py-1 text-white placeholder:text-white/50 focus:outline-none"
            />
            <Button type="submit" className="rounded-none">
              Start Now
            </Button>
          </form>
        </div>

        <div className="flex justify-center animate-fadeInUp">
          <img
            src="/Illustration.png"
            alt="Spin & Win Visual"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto pt-12">
        <div className="container mx-auto flex gap-5 px-4 md:justify-center">
          {promotions.map(({ title, subtitle }) => (
            <div
              key={title}
              className="promo-box min-w-[260px] bg-white/10 border border-white/10 text-left text-sm rounded-xl px-5 py-4 hover:border-yellow-300"
            >
              <h3 className="text-white font-bold mb-1">{title}</h3>
              <p className="text-white/70 text-xs leading-relaxed">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 