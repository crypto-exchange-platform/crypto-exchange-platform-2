import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export const HeroSpinPrize = () => {
    return (_jsxs("section", { className: "w-full bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329] text-white py-24 px-4 overflow-hidden", children: [_jsx("style", { children: `
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
        ` }), _jsxs("div", { className: "container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "space-y-6 animate-fadeInUp", children: [_jsxs("h1", { className: "text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight", children: ["Spin & Score ", _jsx("span", { className: "text-yellow-300", children: "Guaranteed Rewards" })] }), _jsx("p", { className: "text-base text-white/80 max-w-md", children: "Join the fun and claim tokens like ADA, XRP, SOL, and more \u2014 instantly!" }), _jsxs("form", { className: "flex w-full max-w-md overflow-hidden rounded border border-white/30 backdrop-blur-sm", children: [_jsx("input", { type: "text", placeholder: "Enter email or phone number", className: "flex-1 bg-transparent px-4 py-1 text-white placeholder:text-white/50 focus:outline-none" }), _jsx(Button, { type: "submit", className: "rounded-none", children: "Start Now" })] })] }), _jsx("div", { className: "flex justify-center animate-fadeInUp", children: _jsx("img", { src: "/Illustration.png", alt: "Spin & Win Visual", className: "w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-xl" }) })] }), _jsx("div", { className: "w-full overflow-x-auto pt-12", children: _jsx("div", { className: "container mx-auto flex gap-5 px-4 md:justify-center", children: promotions.map(({ title, subtitle }) => (_jsxs("div", { className: "promo-box min-w-[260px] bg-white/10 border border-white/10 text-left text-sm rounded-xl px-5 py-4 hover:border-yellow-300", children: [_jsx("h3", { className: "text-white font-bold mb-1", children: title }), _jsx("p", { className: "text-white/70 text-xs leading-relaxed", children: subtitle })] }, title))) }) })] }));
};
