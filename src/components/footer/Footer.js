import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
const columns = [
    {
        title: "PRODUCTS",
        links: [
            "Spot",
            "Inverse Perpetual",
            "USDT Perpetual",
            "Exchange",
            "Launchpad",
            "Binance Pay",
        ],
    },
    {
        title: "SERVICES",
        links: [
            "Buy Crypto",
            "Markets",
            "Trading Fee",
            "Affiliate Program",
            "Referral Program",
            "API",
        ],
    },
    {
        title: "SUPPORT",
        links: [
            "Bybit Learn",
            "Help Center",
            "User Feedback",
            "Submit A Request",
            "API Documentation",
            "Trading Rules",
        ],
    },
    {
        title: "ABOUT US",
        links: [
            "About Bitget",
            "Authenticity Check",
            "Careers",
            "Business Contacts",
            "Blog",
        ],
    },
];
export const Footer = () => {
    const year = new Date().getFullYear();
    return (_jsxs("footer", { className: "w-full text-white bg-gradient-to-b from-[#1a0329]  to-[#1a0329] px-6 pt-16 pb-6", children: [_jsxs("div", { className: "container mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-10", children: [_jsxs("div", { className: "col-span-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx("img", { src: "/logo.svg", alt: "Rocket Logo", className: "h-10 w-10" }), _jsx("span", { className: "text-xl font-bold", children: "Rocket" })] }), _jsx("p", { className: "text-white/80 text-base font-medium mb-2", children: "Let\u2019s talk! \uD83D\uDC4D" }), _jsx("p", { className: "text-white/60 text-sm mb-1", children: "+98 902 353 2926" }), _jsx("p", { className: "text-white/60 text-sm mb-1", children: "RocketCrypto@Gmail.Com" }), _jsxs("p", { className: "text-white/40 text-xs mt-4", children: ["Copyright \u00A9 ", year, " Free For World People"] })] }), columns.map((section) => (_jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold tracking-wider mb-4 text-white/90", children: section.title }), _jsx("ul", { className: "space-y-2 text-white/60 text-sm", children: section.links.map((link) => (_jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-white transition duration-200", children: link }) }, link))) })] }, section.title)))] }), _jsxs("div", { className: "container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40", children: [_jsxs("p", { children: ["Copyright \u00A9 ", year, " Free For World People"] }), _jsxs("div", { className: "flex gap-4 text-white/40", children: [_jsx("a", { href: "#", className: "hover:text-white", children: _jsx(FaFacebookF, { size: 16 }) }), _jsx("a", { href: "#", className: "hover:text-white", children: _jsx(FaTwitter, { size: 16 }) }), _jsx("a", { href: "#", className: "hover:text-white", children: _jsx(FaInstagram, { size: 16 }) }), _jsx("a", { href: "#", className: "hover:text-white", children: _jsx(FaLinkedinIn, { size: 16 }) })] })] })] }));
};
