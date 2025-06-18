import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const steps = [
    {
        step: "STEP 1",
        title: "Download",
        description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
        icon: "/download.png",
    },
    {
        step: "STEP 2",
        title: "Connect Wallet",
        description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
        icon: "/wallet.png",
    },
    {
        step: "STEP 3",
        title: "Start Trading",
        description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
        icon: "/trade.png",
    },
    {
        step: "STEP 4",
        title: "Earn Money",
        description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
        icon: "/earn.png",
    },
];
export const HowItWorks = () => {
    return (_jsx("section", { className: "w-full bg-gradient-to-b from-[#1a0329]  to-[#1a0329]  py-24 px-4 text-center text-white", children: _jsxs("div", { className: "container mx-auto max-w-5xl", children: [_jsx(motion.h2, { className: "text-3xl md:text-4xl font-bold mb-4", initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: "How It Works" }), _jsx(motion.p, { className: "text-white mb-12 max-w-2xl mx-auto", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: "Stacks is a production-ready library of stackable content blocks built in React Native." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: steps.map(({ step, title, description, icon }, index) => (_jsxs(motion.div, { className: "flex flex-col items-center justify-center text-center gap-4", initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, viewport: { once: true }, children: [_jsx("img", { src: icon, alt: title, className: "h-40 w-30 object-contain" }), _jsx("p", { className: "text-xs font-semibold uppercase text-white", children: step }), _jsx("h3", { className: "text-lg font-bold", children: title }), _jsx("p", { className: "text-sm text-white", children: description })] }, index))) })] }) }));
};
