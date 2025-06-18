import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export const TrustedPlatformSection = () => {
    return (_jsx("section", { className: "w-full py-24 px-4 bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225]\n text-black", children: _jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12", children: [_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full ", children: features.map(({ title, description, icon, bg }, index) => (_jsxs("div", { className: `rounded-xl ${bg} p-6 shadow-md  transition-transform duration-300 hover:-translate-y-1 `, children: [_jsx("h4", { className: "text-center font-bold text-md mb-2 ", children: title }), _jsx("p", { className: "text-sm text-center text-gray-600", children: description })] }, index))) }), _jsxs("div", { className: "max-w-md text-center lg:text-left", children: [_jsxs("h2", { className: "text-3xl lg:text-4xl font-bold mb-4 text-white", children: ["The Most Trusted ", _jsx("br", {}), " Cryptocurrency Platform."] }), _jsx("p", { className: "text-white mb-6", children: "Cryptolly has a variety of features that make it the best place to start trading" }), _jsx(Button, { className: "bg-yellow-300 hover:bg-blue-700 text-black font-semibold px-6 py-3", children: "Let\u2019s Trade Now" })] })] }) }));
};
