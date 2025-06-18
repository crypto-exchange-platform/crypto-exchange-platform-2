import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
const stats = [
    {
        title: "24H Volume",
        value: "$58.4B",
        description: "Global trading volume in the last 24 hours",
    },
    {
        title: "Top Gainer",
        value: "AVAX +14.2%",
        description: "Leading asset by growth today",
    },
    {
        title: "Trending Pair",
        value: "ETH/USDT",
        description: "Most actively traded crypto pair",
    },
];
export const Market = () => {
    return (_jsxs("section", { className: "w-full bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225] text-white py-24 px-4", children: [_jsxs("div", { className: "container mx-auto text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Market Insights at a Glance" }), _jsx("p", { className: "text-gray-300 max-w-xl mx-auto text-lg", children: "Stay informed with real-time market trends, asset movements, and crypto performance." })] }), _jsxs("div", { className: "container mx-auto flex flex-col items-center justify-center gap-12", children: [_jsx("img", { src: "/MarketGlance.png", alt: "Crypto Overview", className: "w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12", children: stats.map(({ title, value, description }, index) => (_jsxs("div", { className: "bg-white/10 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300", children: [_jsx("h3", { className: "text-xl font-bold mb-2 text-cyan-300", children: title }), _jsx("p", { className: "text-3xl font-semibold mb-1", children: value }), _jsx("p", { className: "text-sm text-gray-300", children: description })] }, index))) }), _jsx(Button, { className: "bg-yellow-300 hover:bg-cyan-400 text-black text-sm mt-10 px-6 py-3", children: "View Full Market Data" })] })] }));
};
