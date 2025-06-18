import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const faqs = [
    {
        question: "What is a cryptocurrency exchange?",
        answer: "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital assets like Bitcoin, Ethereum, and more.",
    },
    {
        question: "What products does Bitget offer?",
        answer: "Bitget offers spot trading, futures, copy trading, staking, and a variety of earn products tailored for both beginners and pros.",
    },
    {
        question: "How to buy Bitcoin and other cryptocurrencies on Bitget?",
        answer: "Simply create an account, complete identity verification, then use fiat methods like credit cards or P2P to buy crypto.",
    },
    {
        question: "How do you track cryptocurrency prices?",
        answer: "You can track prices in real-time on Bitget using the live charts, watchlists, and market overview pages.",
    },
    {
        question: "How to trade cryptocurrencies on Bitget?",
        answer: "Choose between spot or futures markets, analyze charts, place market or limit orders, and manage your positions in the trading UI.",
    },
    {
        question: "How to earn with crypto on Bitget?",
        answer: "You can earn through staking, copy trading, saving products, or participating in promotions and campaigns.",
    },
    {
        question: "Why choose Bitget as your cryptocurrency exchange?",
        answer: "Bitget offers security, low fees, a user-friendly interface, and tools like copy trading to support your trading journey.",
    },
];
export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => {
        setOpenIndex(i === openIndex ? null : i);
    };
    return (_jsxs("section", { id: "faq", className: "w-full bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225]\n text-white py-24 px-4", children: [_jsx("style", { children: `
        .faq-item {
          transition: all 0.3s ease-in-out;
        }

        .faq-answer {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-icon {
          transition: transform 0.3s ease;
        }

        .rotate {
          transform: rotate(45deg);
        }
      ` }), _jsxs("div", { className: "container mx-auto max-w-3xl", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-12 text-yellow-300", children: "Frequently Asked Questions" }), _jsx("div", { className: "space-y-4 divide-y divide-white/10 border-y border-white/10", children: faqs.map(({ question, answer }, i) => {
                            const isOpen = openIndex === i;
                            return (_jsxs("div", { className: "faq-item py-4 hover:bg-white/5 px-2 rounded-md transition", children: [_jsxs("button", { onClick: () => toggle(i), className: "w-full flex justify-between items-center text-left text-lg font-medium text-white/90", children: [_jsx("span", { children: question }), _jsx("span", { className: `faq-icon text-2xl text-fuchsia-300 ${isOpen ? "rotate" : ""}`, children: "+" })] }), isOpen && (_jsx("p", { className: "faq-answer text-sm text-white/70 mt-3 leading-relaxed", children: answer }))] }, i));
                        }) })] })] }));
};
