import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
const NAV_ITEMS = [
    { label: "Buy crypto", href: "#hero" },
    { label: "Overview", href: "#overview" },
    { label: "How it works", href: "#howitworks" },
    { label: "Trusted", href: "#trsutedplatform" },
    { label: "Markets", href: "#market" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];
export const Header = ({ onLogin, onSignup }) => {
    return (_jsx("header", { className: "w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329]shadow-lg shadow-fuchsia-900/20", children: _jsxs("div", { className: "container mx-auto flex items-center justify-between px-6 py-4", children: [_jsxs("a", { href: "/", "aria-label": "Homepage", className: "flex items-center gap-3", children: [_jsx("img", { src: "/logo.svg", alt: "Logo", className: "h-9 w-9" }), _jsx("span", { className: "text-xl font-bold text-white tracking-tight", children: "Rocket" })] }), _jsx("nav", { className: "hidden lg:flex gap-6 items-center text-white font-medium text-sm", children: NAV_ITEMS.map(({ label, href }) => (_jsx("a", { href: href, className: "relative transition-all duration-300 hover:text-yellow-300 hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-pink-400", children: label }, label))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Button, { variant: "ghost", className: "text-white hover:text-yellow-300 hover:bg-white/10 text-sm font-medium transition-colors", onClick: onLogin, children: "Log in" }), _jsx(Button, { className: "bg-yellow-300 text-black hover:bg-white hover:text-pink-600 transition-colors", onClick: onSignup, children: "Sign up" })] })] }) }));
};
